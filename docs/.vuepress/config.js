import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
    bundler: viteBundler(),
    base: '/gdm-website/',
    lang: 'ja',
    title: 'Game Development Meetup',
    description: 'ゲーム開發集會へようこそ！',
    locales: {
        '/ja/': {
            lang: 'ja-JP',
            title: 'ゲーム開発集会Ⅱ',
            description: 'ゲーム開発集会へようこそ！',
        },
        '/': {
            lang: 'en-US',
            title: 'Game Development MeetupⅡ',
            description: 'Welcome to our game development meetup!',
        },
        '/zh-CN/': {
            lang: 'zh-CN',
            title: '游戏开发聚会Ⅱ',
            description: '欢迎来到我们的游戏开发聚会！',
        },
    },
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: [
                    { text: 'Home', link: '/' },
                    // { text: 'About', link: '/en/about/' },
                    // Add more navigation items here
                ],
            },
            '/zh-CN/': {
                selectLanguageName: '简体中文',
                navbar: [
                    { text: 'Home', link: '/zh-CN/' },
                    //   { text: 'About', link: '/zh-CN/about/' },
                    // Add more navigation items here
                ],
            },
            '/ja/': {
                selectLanguageName: '日本語',
                navbar: [
                    { text: 'Home', link: '/ja/' },
                    //   { text: 'About', link: '/about/' },
                    // Add more navigation items here
                ],
            },
        },
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
})
