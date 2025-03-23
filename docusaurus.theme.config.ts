import { copyright, logo, title } from './docusaurus.build.env';
import { themes as prismThemes } from 'prism-react-renderer';
import type { ThemeConfig } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
export const themeConfig: ThemeConfig = {
  // 替换为项目的社交卡片
  image: 'img/docusaurus-social-card.jpg',
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
        sidebarId: 'tutorialSidebar',
        position: 'left',
        label: 'earthnut',
      },
      {
        to: '/information/说明',
        sidebarId: 'informationSidebar',
        label: '资料库',
        position: 'left',
      },
      {
        to: '/reset-new-tab',
        sidebarId: 'edgeExtensionSidebar',
        position: 'left',
        label: 'edge 扩展',
      },
      { to: '/日志', label: '日志', position: 'left' },
      {
        href: 'https://github.com/lmssee',
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
      {
        title: '文档或查考',
        items: [
          {
            label: 'earthnut',
            to: '/docs/intro',
          },
          {
            label: 'edge extension',
            to: '/reset-new-tab',
          },
        ],
      },
      {
        title: '更多',
        items: [
          {
            label: 'GitHub',
            href: 'https://github.com/lmssee/lmssee.github.io',
          },
          {
            label: 'x',
            href: 'https://x.com/letmiseesee',
          },
          {
            label: 'npm',
            href: 'https://www.npmjs.com/~earthnut',
          },
        ],
      },
      {
        title: '其他',
        items: [
          {
            label: 'Technical support: docusaurus',
            href: 'https://docusaurus.io/',
          },
          {
            label: `build time: ${new Date().toLocaleString('zh-CN', {
              timeZone: 'Asia/Hong_Kong',
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            })}`,
            href: 'https://www.npmjs.com/~earthnut',
          },
        ],
      },
    ],
    copyright,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig;
