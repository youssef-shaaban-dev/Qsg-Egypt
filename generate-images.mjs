import sharp from "sharp"
import fs from "fs"
import path from "path"

const inputDir = "./public/assets"
const outputDir = "./public/assets"

const sizes = [480, 768, 1080]

for (const file of fs.readdirSync(inputDir)) {
  const ext = path.extname(file)
  const base = path.basename(file, ext)
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue

  for (const size of sizes) {
    const outputBase = path.join(outputDir, `${base}-${size}`)
    const image = sharp(path.join(inputDir, file)).resize(size)

    await image.toFile(`${outputBase}.webp`)
    await image.toFile(`${outputBase}.avif`)
    await image.toFile(`${outputBase}.png`)
  }

  console.log(`✅ Generated responsive images for ${file}`)
}
