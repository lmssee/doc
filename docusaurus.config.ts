import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { baseUrl, favicon, title, url } from './docusaurus.build.env';
import { themeConfig } from './docusaurus.theme.config';

/**************************************
 *
 * 配置文件
 *
 **************************************/
const config: Config = {
  title,
  tagline: '你好，不将饶过任何人的时光依旧',
  favicon, // 网站图标设置
  // Set the production url of your site here
  url,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,
  // github 页面配置
  organizationName: 'lmssee',
  projectName: 'lmssee.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
    // localeDetection: false,
    // locales: ['zh-Hans', 'en'],
  },
  // 预设值
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          path: 'blog',
          routeBasePath: '日志',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            './src/css/theme.scss',
            './src/css/common.scss',
            './src/css/loading.scss',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'informationSidebar',
        path: 'information',
        routeBasePath: 'information',
        sidebarPath: './sidebars.information.ts',
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'edgeExtensionSidebar',
        path: 'edge_extension',
        routeBasePath: '/',
        sidebarPath: './sidebars.edge_extension.ts',
      },
    ],
  ],
  themeConfig: themeConfig,
  customFields: {
    // 添加自定义字段
    // ...
    buildTime: new Date().toLocaleString('zh-CN', {
      timeZone: 'Asia/Hong_Kong',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }),
  },
};

export default config;
