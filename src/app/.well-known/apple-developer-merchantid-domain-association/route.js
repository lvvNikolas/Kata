// ============================================================
// .well-known/apple-developer-merchantid-domain-association
// ============================================================
// Этот файл нужен для верификации домена в Apple Pay.
//
// Зачем:
//   Если в приложении будешь принимать платежи через Apple Pay,
//   Apple должна убедиться что ты владеешь доменом сайта.
//   Для этого они проверяют наличие этого файла по адресу:
//   https://твой-домен.com/.well-known/apple-developer-merchantid-domain-association
//
// КАК НАСТРОИТЬ:
//   1. Зайди в Apple Developer Console → Certificates → Merchant IDs
//   2. Создай или открой свой Merchant ID
//   3. В разделе Apple Pay on the Web → Domain Verification
//   4. Добавь свой домен
//   5. Скачай файл верификации который они дадут
//   6. Скопируй содержимое файла и вставь в переменную ниже
//      вместо 'PASTE_APPLE_MERCHANT_DOMAIN_ASSOCIATION_CONTENT_HERE'
//
// ВАЖНО: Если Apple Pay не планируется — этот файл можно игнорировать.
// ============================================================

const APPLE_MERCHANT_DOMAIN_ASSOCIATION =
  // TODO: Вставь содержимое файла apple-developer-merchantid-domain-association
  // который скачаешь из Apple Developer Console после верификации домена
  'PASTE_APPLE_MERCHANT_DOMAIN_ASSOCIATION_CONTENT_HERE';

// GET handler — Apple обращается по GET запросу к этому URL
export function GET() {
  return new Response(APPLE_MERCHANT_DOMAIN_ASSOCIATION, {
    status: 200,
    headers: {
      // Apple ожидает plain text ответ
      'Content-Type': 'text/plain',
    },
  });
}
