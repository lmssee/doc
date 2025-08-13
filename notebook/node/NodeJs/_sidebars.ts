import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './基础/_sidebars';
	import { sidebar_3_1 } from  './语法/_sidebars';
	import { sidebar_3_2 } from  './express/_sidebars';
	import { sidebar_3_3 } from  './一些包/_sidebars';
	import { sidebar_3_4 } from  './一些/_sidebars';
	import { sidebar_3_5 } from  './npm/_sidebars';
	import { sidebar_3_6 } from  './webpack/_sidebars';

export const sidebar_2_0: SidebarItemConfig = {
  type: 'category',
  label: 'NodeJs',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'node/NodeJs/index'
  },   
  items: [sidebar_3_0,
sidebar_3_1,
sidebar_3_2,
sidebar_3_3,
sidebar_3_4,
sidebar_3_5,
sidebar_3_6]
};
