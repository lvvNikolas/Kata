// ============================================================
// sitemap.js — Автоматическая генерация sitemap.xml
// ============================================================
// Next.js App Router автоматически создаёт файл /sitemap.xml
// на основе данных которые возвращает эта функция.
//
// Зачем нужен sitemap:
//   - Говорит Google какие страницы существуют на сайте
//   - Ускоряет индексацию новых страниц
//   - Помогает поисковикам понять структуру сайта
//
// После добавления нового домена — обнови BASE_URL
// После добавления новых страниц — добавь их в массив
//
// Проверить результат: https://kata-es4q.vercel.app/sitemap.xml
// ============================================================

const BASE_URL = 'https://kata-es4q.vercel.app';

export default function sitemap() {
  return [
    {
      // Главная страница — самый высокий приоритет (1.0)
      url: BASE_URL,
      lastModified: new Date(),       // Дата последнего изменения
      changeFrequency: 'monthly',     // Как часто меняется (monthly = раз в месяц)
      priority: 1,                    // Приоритет от 0 до 1 (1 = самый важный)
    },
    {
      // Страница политики конфиденциальности
      // Обязательна для Google Play и Apple App Store
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',      // Меняется редко
      priority: 0.5,
    },
    {
      // Страница условий использования
      // Обязательна для Google Play и Apple App Store
      url: `${BASE_URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
