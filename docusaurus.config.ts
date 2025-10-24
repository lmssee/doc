import type * as Preset from '@docusaurus/preset-classic';
import {
  baseUrl,
  copyright,
  favicon,
  title,
  url,
} from './docusaurus-config/build.env';
import { themeConfig } from './docusaurus-config/theme.config';
import { CustomConfig } from '@docusaurus/types';
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
const config: CustomConfig = {
  title,
  // titleDelimiter: '  '.repeat(60).concat('for 🀪'),
  tagline: '你好，不将饶过任何人的时光依旧',
  favicon, // 网站图标设置
  // Set the production url of your site here
  url,
  // 设置 /<baseUrl>/ 路径您的网站在该服务下提供服务
  // 对于 GitHub 页面部署，它通常是 '/<projectName>/'
  baseUrl,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: `icon/${copyright}/site.webmanifest`,
      },
    },
  ],
  // 下面使用 `docusaurus deploy` 时设置 github.com 组织或个人名称的
  organizationName: 'earthnut',
  // 下面使用 `docusaurus deploy` 时设置 github.com 仓库名的
  projectName: 'earth note',
  // 下面使用 `docusaurus deploy` 时设置 github.com 分支名的
  deploymentBranch: 'main',
  // 下面使用 `docusaurus deploy` 时设置 github.com 设置主机名的
  githubHost: 'github.com',
  // 下面使用 `docusaurus deploy` 时设置 github.com 设置端口名的
  githubPort: '22',
  onBrokenLinks: 'throw',
  // 限制将在未来的 v4 版本移除该选项
  // onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  // 预设值
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'components',
          // 置之于根
          routeBasePath: '/',
          sidebarPath: './components/_sidebars.ts',
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
        sidebarPath: './npm/_sidebars.ts',
        sidebarCollapsed: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'edgeExtensionSidebars',
        path: 'edge-extension',
        routeBasePath: 'edge-extension',
        sidebarPath: './edge-extension/_sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'customHooksSidebars',
        path: './custom-hooks',
        routeBasePath: 'custom-hooks',
        sidebarPath: './custom-hooks/_sidebars.ts',
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
