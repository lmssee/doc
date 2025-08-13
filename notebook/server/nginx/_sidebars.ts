import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './基础/_sidebars';
	import { sidebar_3_1 } from  './配置文件/_sidebars';

export const sidebar_2_0: SidebarItemConfig = {
  type: 'category',
  label: 'nginx',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'server/nginx/index'
  },   
  items: [sidebar_3_0,
sidebar_3_1]
};
