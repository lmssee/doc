import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// 执行环境为 node  - 禁止使用客户端的 api （浏览器 api、 jsx 、tsx 内容）

/**
 * 创建一个 [侧边栏](https://docusaurus.io/docs/sidebar) 可以：
 *
 * - 为文档构建一个有绪的组
 * - 为该组的每个文档呈现侧边栏
 * - 提供下一个/上一个导航
 *
 * 侧边栏可以从文件系统生成，也可以在此处显式定义。
 *
 * 创建任意数量的边栏
 *
 */
export default {
  components: [
    'quickUse',
    'layout',
    {
      type: 'link',
      href: '/custom-hooks/',
      label: '自定义钩子',
    },
  ],
} as SidebarsConfig;
