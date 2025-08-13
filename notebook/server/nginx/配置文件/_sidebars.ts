import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_1: SidebarItemConfig = {
  type: 'category',
  label: '配置文件',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'server/nginx/配置文件/index'
  },   
  items: ['server/nginx/配置文件/插值']
};
