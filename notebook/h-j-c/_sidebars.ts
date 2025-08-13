import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_2_0 } from  './html/_sidebars';
	import { sidebar_2_1 } from  './css/_sidebars';
	import { sidebar_2_2 } from  './js/_sidebars';
	import { sidebar_2_3 } from  './其他/_sidebars';

export const sidebar_1_0: SidebarItemConfig = {
  type: 'category',
  label: 'h-j-c',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/index'
  },   
  items: [sidebar_2_0,
sidebar_2_1,
sidebar_2_2,
sidebar_2_3]
};
