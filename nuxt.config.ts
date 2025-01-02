// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtPage } from 'nuxt/schema'

export default defineNuxtConfig({
  // defaultの設定
  devtools: { enabled: true },
  srcDir: 'src/',

  app: {
    // ベースディレクトリの環境変数
    baseURL: process.env.NUXT_APP_BASE_URL,
  },

  // pages内の大文字から始まるファイルを除外
  // 参考：https://nuxt.com/docs/guide/going-further/custom-routing#pages-hook
  hooks: {
    'pages:extend'(pages) {
      function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
        const pagesToRemove = []
        for (const page of pages) {
          const filename = page.file
            ? page.file.match(/[^/]+$/)?.[0]
            : undefined
          if (filename && pattern.test(filename)) {
            pagesToRemove.push(page)
          } else {
            removePagesMatching(pattern, page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/^[A-Z].*$/, pages)
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  /**
   * 意図的に事前レンダリングを禁止
   * docs:https://nitro.unjs.io/config#prerender
   */
  // 必要に応じて設定する
  // nitro: {
  //   prerender: {
  //     ignore: [
  //       // 禁止ディレクトリを追加
  //       '/no-generate',
  //     ],
  //   },
  // },

  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: ['@/assets/styles/settings.scss'],

  // SCSSのグローバル スタイルのインポート
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/mixins.scss" as *;',
        },
      },
    },
  },

  //typescriptの型チェックを有効化
  typescript: {
    // 型を常にチェック
    // memo:動作が重い場合はfalseへ変更
    typeCheck: true,
  },

  site: {
    defaultLocale: 'ja',
    url: 'http://localhost:3000',
    name: 'con-cave',
    // description: '共通のディスクリプション',
    // URL末尾にスラッシュを付与する
    trailingSlash: true,
  },

  // robots.txt(nuxt/seo)
  // memo: NUXT_SITE_ENV === 'production' 以外では全て無効化される
  robots: {
    // disallow: ['/admin'], // 無効化リスト
  },

  // sitemap.xml(nuxt/seo)
  // memo: robots.disallowで指定したパスはサイトマップに含まれない
  sitemap: {
    xsl: false, // sitmap.xmlのスタイルシートを無効化
    credits: false, // サイトマップのクレジットを無効化
  },

  // og:image(nuxt/seo)
  // memo: 無効化したい場合は、enabled: falseを指定
  // memo: 変更が反映されない場合はキャッシュの無効化を試す。
  ogImage: {
    // enabled: false, // 無効化
    // runtimeCacheStorage: false, // キャッシュの無効化
    fonts: ['Noto+Sans+JP:700'], // 日本語使えるフォントを指定
  },

  modules: [
    '@nuxtjs/seo',

    // https://github.com/nuxt-community/gtm-module
    '@zadigetvoltaire/nuxt-gtm',

    // https://nuxt.com/modules/eslint
    [
      '@nuxtjs/eslint-module',
      {
        // 起動時lintチェック
        // memo:動作が重い場合はfalseへ変更
        lintOnStart: true,
      },
    ],
  ],

  // nuxt-gtm(IDは各自変更)
  // TODO: GTM登録後にIDを追加
  gtm: {
    id: 'GTM-XXXXXXXX',
  },
})
