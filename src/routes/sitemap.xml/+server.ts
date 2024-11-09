import hymnsList from '$lib/content/hymns'

export const prerender = true

export function GET (): Response {
  const site = 'https://hinario.netlify.app'
  const lastmod = new Date().toISOString()

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="https://www.sitemaps.org/schemas/sitemap/0.9 https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
    >
      <url>
        <loc>${site}/</loc>
        <changefreq>Never</changefreq>
        <priority>1.0</priority>
        <lastmod>${lastmod}</lastmod>
      </url>
      ${
        hymnsList.map(hymn => `
        <url>
          <loc>${site}/hino/${hymn.file.name}</loc>
          <changefreq>Never</changefreq>
          <priority>0.8</priority>
          <lastmod>${lastmod}</lastmod>
        </url>
        `)
      }
    </urlset>
  `.trim()

  return new Response(
    sitemap,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  )
}
