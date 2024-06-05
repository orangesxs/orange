import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  base: '/orange/',
  title: '尚大王',
  description: '尚大王尚大王尚大王',
  theme: defaultTheme({
    logo: '/images/cat.png',
    navbar: ['/'],
  }),
  bundler: viteBundler(),
})
