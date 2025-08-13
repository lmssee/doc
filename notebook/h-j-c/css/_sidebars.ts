import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './基础/_sidebars';
	import { sidebar_3_1 } from  './css 3/_sidebars';
	import { sidebar_3_2 } from  './布局/_sidebars';
	import { sidebar_3_3 } from  './变幻和贞/_sidebars';
	import { sidebar_3_4 } from  './画布 canvas/_sidebars';
	import { sidebar_3_5 } from  './js/_sidebars';

export const sidebar_2_1: SidebarItemConfig = {
  type: 'category',
  label: 'css',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/css/index'
  },   
  items: [sidebar_3_0,
sidebar_3_1,
sidebar_3_2,
sidebar_3_3,
sidebar_3_4,
sidebar_3_5]
};
