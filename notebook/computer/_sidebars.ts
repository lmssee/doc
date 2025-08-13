import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_2_0 } from  './计算机基础/_sidebars';
	import { sidebar_2_1 } from  './linux/_sidebars';
	import { sidebar_2_2 } from  './some/_sidebars';

export const sidebar_1_2: SidebarItemConfig = {
  type: 'category',
  label: 'computer',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/index'
  },   
  items: [sidebar_2_0,
sidebar_2_1,
sidebar_2_2]
};
