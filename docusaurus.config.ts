import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { baseUrl, favicon, title, url } from './docusaurus-config/build.env';
import { themeConfig } from './docusaurus-config/theme.config';
import { envelopment } from './docusaurus-config/env';

/**************************************
 *
 * 配置文件
 *
 * 包含：
 *
 * - 网站元数据
 * - 部署配置
 * - 主题、插件和预设配置
 * - 自定义部分配置
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

  projectName: 'lmssee.github.io',
  // github 页面配置
  organizationName: 'lmssee',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },
  // 预设值
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'earthnut',
          // 置之于根
          routeBasePath: '/',
          sidebarPath: './docusaurus-config/sidebars.ts',
        },
        blog: {
          path: 'blog',
          blogTitle: '📔',
          routeBasePath: '日志',
          showReadingTime: true,
          blogSidebarTitle: '建站日志',
          blogSidebarCount: 'ALL',
          // feedOptions: {
          //   type: ['rss', 'atom'],
          //   xslt: true,
          // },
          // onInlineTags: 'warn',
          // onInlineAuthors: 'warn',
          // onUntruncatedBlogPosts: 'warn',
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
        id: 'npmSidebars',
        path: 'npm',
        routeBasePath: 'npm',
        sidebarPath: './docusaurus-config/sidebars.npm.ts',
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'noteBookSidebars',
        path: 'notebook',
        routeBasePath: 'notebook',
        sidebarPath: './docusaurus-config/sidebars.notebook.ts',
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'edgeExtensionSidebars',
        path: 'edge_extension',
        routeBasePath: 'edge-extension',
        sidebarPath: './docusaurus-config/sidebars.edge_extension.ts',
      },
    ],
  ],
  themeConfig: themeConfig,
  /**  自定义字段  */
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
    envelopment,
  },
};

export default config;
