import { copyright, logo, title } from './build.env';
import { themes as prismThemes } from 'prism-react-renderer';

import type * as Preset from '@docusaurus/preset-classic';

/**  github 的用户名  */
const githubUserName = 'earthnutDev';

/**  npm 账户链接  */
// const npmUrl = `https://www.npmjs.com/~${envelopment ? 'earthnut' : 'lmssee'}`;
/**  x 的账户链接  */
// const xUrl = `https://x.com/${envelopment ? 'earthnut_dev' : 'reset_new_tab'}`;
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
        sidebarId: 'earthnutUI',
        position: 'left',
        label: 'earthnut',
      },
      {
        to: '/npm',
        // type: 'docSidebar',
        sidebarId: 'npmSidebars',
        label: 'npm 工具包',
        title: 'npm',
        position: 'left',
      },
      {
        to: '/edge-extension/',
        sidebarId: 'edgeExtensionSidebars',
        position: 'right',
        label: 'edge 扩展',
      },
      {
        to: '/notebook/',
        // type: 'docSidebar',
        sidebarId: 'noteBookSidebars',
        label: '学习笔记',
        title: '📒',
        position: 'right',
      },
      { to: '/日志', label: '日志', position: 'right', title: '建站日志' },
      {
        href: 'https://github.com/' + githubUserName,
        label: 'GitHub',
        position: 'right',
      },
      // {
      //   type: "localeDropdown",
      // },
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
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig;
