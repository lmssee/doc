import { copyright, logo, title } from './build.env';
import { themes as prismThemes } from 'prism-react-renderer';

import type * as Preset from '@docusaurus/preset-classic';

//**  主题配置  */
export const themeConfig: Preset.ThemeConfig = {
  titleSuffix: '你好',
  // 替换为项目的社交卡片
  image: 'img/background-image-for-presentation.jpg',
  docs: {
    sidebar: {
      autoCollapseCategories: true,
      hideable: true,
    },
  },
  // 控制内页的标题
  metadata: [
    {
      name: 'og:title',
      content: '${title} ***',
    },
  ],
  //  导航栏配置
  navbar: {
    style: 'dark',
    title,
    logo: {
      alt: title,
      src: logo,
    },
    items: [
      {
        type: 'docSidebar',
        sidebarId: 'components',
        position: 'left',
        label: '组件',
      },
      {
        to: '/npm',
        sidebarId: 'npmSidebars',
        label: 'npm 工具包',
        position: 'left',
      },
      {
        to: '/edge-extension/',
        sidebarId: 'edgeExtensionSidebars',
        position: 'right',
        label: 'edge 扩展',
      },
      { to: '/日志', label: '日志', position: 'right', title: '建站日志' },
      {
        href: 'https://earthnote.pages.dev',
        label: '学习笔记',
        position: 'right',
      },
      {
        href: 'https://github.com/earthnutDev.github.io',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  footer: {
    style: 'dark',
    links: [
      // {
      //   title: '文档或查考',
      //   items: [
      //     {
      //       label: 'earthnut',
      //       to: '/intro',
      //     },
      //     {
      //       label: 'edge extension',
      //       to: '/edge-extension/reset-new-tab',
      //     },
      //   ],
      // },
      // {
      //   title: '更多',
      //   items: [
      //     {
      //       label: 'GitHub',
      //       href: `https://github.com/${githubUserName}/${githubUserName}.github.io`,
      //     },
      //     {
      //       label: 'x',
      //       href: xUrl,
      //     },
      //     {
      //       label: 'npm',
      //       href: npmUrl,
      //     },
      //   ],
      // },
      // {
      //   title: '其他',
      //   items: [
      //     {
      //       label: '使用技术: docusaurus',
      //       href: 'https://docusaurus.io/',
      //     },
      //     {
      //       label: `构建时间: ${new Date().toLocaleString('zh-CN', {
      //         timeZone: 'Asia/Hong_Kong',
      //         year: 'numeric',
      //         month: '2-digit',
      //         day: '2-digit',
      //         hour: '2-digit',
      //         minute: '2-digit',
      //         second: '2-digit',
      //         hour12: false,
      //       })}`,
      //       href: npmUrl,
      //     },
      //   ],
      // },
    ],
    copyright,
  },
  /**  [支持的语言](https://prismjs.com/#supported-languages)  */
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
    additionalLanguages: ['Bash', 'nginx', 'markdown'],
  },
} satisfies Preset.ThemeConfig;
