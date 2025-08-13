import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_0: SidebarItemConfig = {
  type: 'category',
  label: '基础',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'server/nginx/基础/index'
  },   
  items: ['server/nginx/基础/关于',
'server/nginx/基础/下载']
};
