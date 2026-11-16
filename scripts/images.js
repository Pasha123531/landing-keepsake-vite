import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const destination = 'public/optimized';
await mkdir(destination, { recursive: true });
const files = (await readdir('public/images')).filter((name) =>
  name.endsWith('.png'),
);
const sources = [
  ...files.map((file) => ({
    source: path.join('public/images', file),
    name: path.parse(file).name,
  })),
  { source: 'public/icons/Avatar.png', name: 'avatar' },
];
for (const { source, name } of sources) {
  for (const width of [200, 400]) {
    const base = path.join(destination, `${name}-${width}`);
    await sharp(source)
      .resize({ width })
      .avif({ quality: 55 })
      .toFile(`${base}.avif`);
    await sharp(source)
      .resize({ width })
      .webp({ quality: 80 })
      .toFile(`${base}.webp`);
    await sharp(source)
      .resize({ width })
      .flatten({ background: '#ffffff' })
      .jpeg({ quality: 80 })
      .toFile(`${base}.jpg`);
  }
}
for (const width of [200, 400]) {
  const height = Math.round((width * 315) / 400);
  const input = {
    create: { width, height, channels: 3, background: '#222428' },
  };
  for (const format of ['avif', 'webp', 'jpeg']) {
    const extension = format === 'jpeg' ? 'jpg' : format;
    await sharp(input)
      [format]()
      .toFile(`${destination}/profile-${width}.${extension}`);
  }
}
console.log(`Optimized ${sources.length + 1} images.`);
