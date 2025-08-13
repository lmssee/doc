import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_1: SidebarItemConfig = {
  type: 'category',
  label: '语法',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'node/NodeJs/语法/index'
  },   
  items: ['node/NodeJs/语法/事件',
'node/NodeJs/语法/EventEmitter']
};
