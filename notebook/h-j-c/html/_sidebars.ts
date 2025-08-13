import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './基础/_sidebars';
	import { sidebar_3_1 } from  './表格/_sidebars';
	import { sidebar_3_2 } from  './表单/_sidebars';
	import { sidebar_3_3 } from  './html 5/_sidebars';
	import { sidebar_3_4 } from  './多媒体/_sidebars';
	import { sidebar_3_5 } from  './cookie/_sidebars';
	import { sidebar_3_6 } from  './定位/_sidebars';
	import { sidebar_3_7 } from  './storage/_sidebars';
	import { sidebar_3_8 } from  './webSQl/_sidebars';
	import { sidebar_3_9 } from  './indexedDB/_sidebars';
	import { sidebar_3_10 } from  './cache/_sidebars';
	import { sidebar_3_11 } from  './线程/_sidebars';
	import { sidebar_3_12 } from  './消息/_sidebars';
	import { sidebar_3_13 } from  './文件/_sidebars';
	import { sidebar_3_14 } from  './拖拽/_sidebars';
	import { sidebar_3_15 } from  './通知/_sidebars';
	import { sidebar_3_16 } from  './辅助/_sidebars';
	import { sidebar_3_17 } from  './SVG/_sidebars';
	import { sidebar_3_18 } from  './了解/_sidebars';

export const sidebar_2_0: SidebarItemConfig = {
  type: 'category',
  label: 'html',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/html/index'
  },   
  items: [sidebar_3_0,
sidebar_3_1,
sidebar_3_2,
sidebar_3_3,
sidebar_3_4,
sidebar_3_5,
sidebar_3_6,
sidebar_3_7,
sidebar_3_8,
sidebar_3_9,
sidebar_3_10,
sidebar_3_11,
sidebar_3_12,
sidebar_3_13,
sidebar_3_14,
sidebar_3_15,
sidebar_3_16,
sidebar_3_17,
sidebar_3_18]
};
