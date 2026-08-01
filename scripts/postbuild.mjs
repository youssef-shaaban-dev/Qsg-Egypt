import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://qsgegypt.net'; // Adjust to actual domain
const PORT = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist');

// Define all routes to pre-render based on metadata.ts
const coreRoutes = [
  '/',
  '/about-us/the-company',
  '/about-us/our-team',
  '/about-us/our-global-representatives',
  '/accreditations',
  '/services/inspection-and-expediting',
  '/services/assets-valuation-and-surveying',
  '/services/oil-gas-and-power-ASME-TPI',
  '/services/feasibility-studies-and-consulting-services',
  '/major-clients',
  '/contact-us'
];

// Generate English and Arabic variations
const allRoutes = coreRoutes.flatMap(route => [
  route,
  `/ar${route === '/' ? '' : route}`
]);



async function prerenderPages() {
  console.log('Starting pre-rendering process...');
  
  // Setup express to serve the built 'dist' directory
  const app = express();
  app.use(express.static(DIST_DIR));
  // Fallback to index.html for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
  
  const server = app.listen(PORT);
  console.log(`Local server listening on port ${PORT}`);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Create subdirectories and write index.html for each route
  for (const route of allRoutes) {
    if (route === '/') continue; // The root index.html is already correct, but we'll overwrite it with prerendered later
    
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Pre-rendering ${route}...`);
    
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    
    // Give React a small moment to ensure Helmet has written head tags
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));
    
    const html = await page.content();
    
    // Determine the save path
    const routeDir = path.join(DIST_DIR, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  }
  
  // Pre-render the root route at the very end to overwrite the empty SPA index.html
  console.log(`Pre-rendering /...`);
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));
  const htmlRoot = await page.content();
  fs.writeFileSync(path.join(DIST_DIR, 'index.html'), htmlRoot);

  await browser.close();
  server.close();
  console.log('Pre-rendering complete.');
}

async function run() {
  try {

    await prerenderPages();
    console.log('Post-build SEO generation completed successfully!');
  } catch (err) {
    console.error('Error during post-build process:', err);
    process.exit(1);
  }
}

run();
