import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_6: SidebarItemConfig = {
  type: 'category',
  label: 'webpack',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'node/NodeJs/webpack/index'
  },   
  items: ['node/NodeJs/webpack/简介',
'node/NodeJs/webpack/安装',
'node/NodeJs/webpack/打包',
'node/NodeJs/webpack/热更新',
'node/NodeJs/webpack/模块',
'node/NodeJs/webpack/资源入口',
'node/NodeJs/webpack/资源出口',
'node/NodeJs/webpack/预处理器',
'node/NodeJs/webpack/样式处理',
'node/NodeJs/webpack/代码片段',
'node/NodeJs/webpack/生产环境',
'node/NodeJs/webpack/优化']
};
