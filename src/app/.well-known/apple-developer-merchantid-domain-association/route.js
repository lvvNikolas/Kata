// Apple Pay Domain Verification file
// После получения файла из Apple Developer Console (Merchant ID → Domain Verification):
// Вставь содержимое файла в переменную ниже вместо TODO строки

const APPLE_MERCHANT_DOMAIN_ASSOCIATION =
  // TODO: Вставь содержимое файла apple-developer-merchantid-domain-association из Apple Developer Console
  'PASTE_APPLE_MERCHANT_DOMAIN_ASSOCIATION_CONTENT_HERE';

export function GET() {
  return new Response(APPLE_MERCHANT_DOMAIN_ASSOCIATION, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
