import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_0: SidebarItemConfig = {
  type: 'category',
  label: '基础',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'node/NodeJs/基础/index'
  },   
  items: ['node/NodeJs/基础/简介',
'node/NodeJs/基础/环境搭建',
'node/NodeJs/基础/模块',
'node/NodeJs/基础/插件',
'node/NodeJs/基础/搭建 http',
'node/NodeJs/基础/静态资源',
'node/NodeJs/基础/请求对象',
'node/NodeJs/基础/响应对象',
'node/NodeJs/基础/一些']
};
