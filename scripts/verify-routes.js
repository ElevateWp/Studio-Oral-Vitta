const http = require('http');

const routes = [
  '/',
  '/about/',
  '/dentists/',
  '/dentists/dr-marcelo-de-souza-bezerra/',
  '/dentists/dra-bruna/',
  '/dental-implants/',
  '/root-canal/',
  '/teeth-whitening/',
  '/dental-cleaning/',
  '/braces/',
  '/cosmetic-dentistry/',
  '/emergency-dentist/',
  '/book-appointment/',
  '/contact/',
  '/blog/',
  '/blog/understanding-osseointegration-dental-implants/',
  '/robots.txt',
  '/sitemap.xml',
];

async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          hasH1: data.includes('<h1'),
          hasSchema: data.includes('application/ld+json') || path.endsWith('.xml') || path.endsWith('.txt'),
          contentLength: data.length,
        });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function main() {
  console.log('--- AUDITING ALL ROUTES ---');
  const results = [];
  for (const r of routes) {
    const res = await checkRoute(r);
    results.push(res);
  }
  console.table(results);
  const all200 = results.every((r) => r.status === 200);
  console.log(`All routes returned HTTP 200: ${all200}`);
}

main();
