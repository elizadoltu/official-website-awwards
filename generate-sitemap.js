import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/project/:name', changefreq: 'weekly', priority: 0.9 }
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: 'https://elizadoltuofficial.net/' });
  const writeStream = createWriteStream(join(__dirname, 'public', 'sitemap.xml'));

  sitemap.pipe(writeStream);

  routes.forEach(route => sitemap.write(route));

  sitemap.end();

  await streamToPromise(sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();
