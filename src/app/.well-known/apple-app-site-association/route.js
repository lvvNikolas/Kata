// ============================================================
// .well-known/apple-app-site-association — Route Handler
// ============================================================
// Этот файл нужен для двух вещей:
//
// 1. UNIVERSAL LINKS (applinks)
//    Позволяет ссылкам на сайт автоматически открываться
//    в iOS приложении (если оно установлено).
//    Например: нажал на ссылку → открылось приложение, а не браузер.
//
// 2. SHARED WEB CREDENTIALS (webcredentials)
//    Позволяет iOS автоматически предлагать сохранённые
//    пароли от сайта при входе в приложение.
//
// КАК НАСТРОИТЬ:
//   1. Зарегистрируйся в Apple Developer Program (developer.apple.com, $99/год)
//   2. Создай App ID в разделе Certificates, Identifiers & Profiles
//   3. Найди свой Team ID (вверху страницы в аккаунте)
//   4. Найди Bundle ID своего приложения (например: com.katatech.app)
//   5. Замени 'TEAMID.com.katatech.app' на реальные данные
//      Формат: 'TEAM_ID.BUNDLE_ID'
//      Пример: 'A1B2C3D4E5.com.katatech.myapp'
//
// Apple требует этот файл по адресу:
//   https://твой-домен.com/.well-known/apple-app-site-association
// и возвращать его с Content-Type: application/json
// ============================================================

const appleAppSiteAssociation = {
  applinks: {
    apps: [], // Оставить пустым — это требование Apple
    details: [
      {
        // TODO: Замени на реальный App ID после регистрации в Apple Developer Program
        // Формат: "TEAM_ID.BUNDLE_ID"
        appID: 'TEAMID.com.katatech.app',
        paths: ['*'], // '*' = все пути сайта открываются в приложении
      },
    ],
  },
  // Shared Web Credentials — автозаполнение паролей между сайтом и приложением
  webcredentials: {
    // TODO: Замени на реальный App ID
    apps: ['TEAMID.com.katatech.app'],
  },
};

// GET handler — Next.js Route Handler
// Apple обращается по GET запросу к этому URL
export function GET() {
  return new Response(JSON.stringify(appleAppSiteAssociation), {
    status: 200,
    headers: {
      // Apple требует именно этот Content-Type
      'Content-Type': 'application/json',
    },
  });
}
