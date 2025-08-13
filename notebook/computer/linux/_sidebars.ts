import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './基础/_sidebars';
	import { sidebar_3_1 } from  './mac/_sidebars';

export const sidebar_2_1: SidebarItemConfig = {
  type: 'category',
  label: 'linux',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/linux/index'
  },   
  items: [sidebar_3_0,
sidebar_3_1]
};
