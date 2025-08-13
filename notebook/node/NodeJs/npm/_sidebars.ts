import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_5: SidebarItemConfig = {
  type: 'category',
  label: 'npm',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'node/NodeJs/npm/index'
  },   
  items: ['node/NodeJs/npm/使用',
'node/NodeJs/npm/入门']
};
