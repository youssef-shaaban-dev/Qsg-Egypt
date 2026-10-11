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
  
  // Read the initial SPA index.html into memory so disk writes don't interfere
  const initialHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');

  // Setup express to serve the built 'dist' directory
  const app = express();
  app.use(express.static(DIST_DIR));
  // Fallback to initial index.html for SPA routing
  app.use((req, res) => {
    res.type('html').send(initialHtml);
  });
  
  // Listen on port 0 to let OS assign an available free port
  const server = app.listen(0);
  const port = server.address().port;
  console.log(`Local server listening on available port ${port}`);

  const chromePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  const executablePath = chromePaths.find(p => fs.existsSync(p));

  const launchOptions = {
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  };
  if (executablePath) {
    launchOptions.executablePath = executablePath;
  }

  let browser;
  try {
    browser = await puppeteer.launch(launchOptions);
  } catch (err) {
    console.warn('Could not launch browser for pre-rendering, skipping SSG prerender:', err.message);
    server.close();
    return;
  }

  try {
    const page = await browser.newPage();

    // Create subdirectories and write index.html for each route
    for (const route of allRoutes) {
      if (route === '/') continue; // The root index.html is already correct, but we'll overwrite it with prerendered later
      
      const url = `http://localhost:${port}${route}`;
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
    await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));
    const htmlRoot = await page.content();
    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), htmlRoot);

    console.log('Pre-rendering complete.');
  } finally {
    if (browser) await browser.close();
    server.close();
  }
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
