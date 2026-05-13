import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Марсо - российский парфюмерный бренд высшего класса',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { property: 'keywords', content: 'парфюм, купить парфюм, купить автопорфюм, купить мужской парфюм, купить женский парфюм, автопорфюм, мужской парфюм, женский парфюм, marso, марсо, французские духи, французский парфюм' },
        { property: 'description', content: 'Парфюм Maрсо имеет собственные формулы, которые в звучании схожи с известными ароматами мировых хитов, но парфюмерные композиции Maрсo имеют авторскую изюминку.' },
        { property: 'og:title', content: 'Марсо-российский парфюмерный бренд высшего класса' },
        { property: 'og:description', content: 'Парфюм Maрсо имеет собственные формулы, которые в звучании схожи с известными ароматами мировых хитов, но парфюмерные композиции Maрсo имеют авторскую изюминку.' },
        { property: 'og:image', content: 'https://marso-tmv.ru/img/img1.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url)),
    '~': fileURLToPath(new URL('./app', import.meta.url)),
  },

  vite: {
    plugins: [svgLoader({ svgo: false })],
  },

  modules: ['@pinia/nuxt']
})
