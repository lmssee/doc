import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_12: SidebarItemConfig = {
  type: 'category',
  label: '消息',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/html/消息/index'
  },   
  items: ['h-j-c/html/消息/简介',
'h-j-c/html/消息/传递',
'h-j-c/html/消息/Sockets',
'h-j-c/html/消息/嵌套字']
};
