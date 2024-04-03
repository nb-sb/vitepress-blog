import { defineConfig } from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
export default defineConfig({
  base: '/vitepress-blog/',
  title: '戏人看戏',
  description: '戏人看戏',
  head: [['meta', { name: 'keywords', content: '戏人看戏, java, python, golang , fisco' }]],
  lastUpdated: true,
  // sitemap: {
  //   hostname: 'https://nb.sb'
  // },
  themeConfig: {
    siteTitle: '',
    logo: '/logo/logo.jpg',
    nav: [
      // { text: 'Guide', link: '/guide', activeMatch: 'https://github.com/nb-sb/' },
      {
        text: 'java',
        items: [
          { text: 'mybatis', link: '/mybatis/介绍/介绍' },
          { text: 'spring', link: '/' },
          { text: 'jvm', link: '/' }
        ]
      },
      {
        text: 'DDD',
        items: [
          
        ]
      }
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/nb-sb/" }],
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdatedText: "最近更新时间",
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024'
    },
    markdown: {
      lineNumbers: true,
      image: {
        // 默认禁用图片懒加载
        lazyLoading: true
      }
    },
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        }
      }
    },
    // sidebar: {
    //   '/guide/': [
    //     {
    //       text: 'Guide',
    //       items: [
    //         { text: 'Index', link: '/guide/' }, // /guide/index.md
    //         { text: 'One', link: '/guide/one' }, // /guide/one.md
    //         { text: 'Two', link: '/guide/two' } // /guide/two.md
    //       ]
    //     }
    //   ],
      
    // }
  },
  vite: {
    plugins: [
      AutoSidebar({
        collapsed: false,
      })
    ]
  },

  

});
