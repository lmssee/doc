import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './正则/_sidebars';
	import { sidebar_3_1 } from  './浏览器/_sidebars';
	import { sidebar_3_2 } from  './扩展阅读/_sidebars';
	import { sidebar_3_3 } from  './http 协议/_sidebars';
	import { sidebar_3_4 } from  './three/_sidebars';

export const sidebar_2_3: SidebarItemConfig = {
  type: 'category',
  label: '其他',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/其他/index'
  },   
  items: [sidebar_3_0,
sidebar_3_1,
sidebar_3_2,
sidebar_3_3,
sidebar_3_4]
};
