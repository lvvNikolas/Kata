// Apple App Site Association file — required for Universal Links (iOS deep linking)
// После получения Bundle ID и Team ID из Apple Developer Console:
// Замени "TEAMID.com.yourcompany.yourapp" на твои реальные данные
// Пример: "A1B2C3D4E5.com.katatech.app"

const appleAppSiteAssociation = {
  applinks: {
    apps: [],
    details: [
      {
        // TODO: Замени на реальный App ID после регистрации в Apple Developer Program
        // Формат: "TEAM_ID.BUNDLE_ID"
        appID: 'TEAMID.com.katatech.app',
        paths: ['*'],
      },
    ],
  },
  webcredentials: {
    // TODO: Замени на реальный App ID
    apps: ['TEAMID.com.katatech.app'],
  },
};

export function GET() {
  return new Response(JSON.stringify(appleAppSiteAssociation), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
