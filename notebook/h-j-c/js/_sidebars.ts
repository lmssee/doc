import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './基础/_sidebars';
	import { sidebar_3_1 } from  './数值/_sidebars';
	import { sidebar_3_2 } from  './字符串/_sidebars';
	import { sidebar_3_3 } from  './数组/_sidebars';
	import { sidebar_3_4 } from  './函数/_sidebars';
	import { sidebar_3_5 } from  './对象/_sidebars';
	import { sidebar_3_6 } from  './原型/_sidebars';
	import { sidebar_3_7 } from  './BOM/_sidebars';
	import { sidebar_3_8 } from  './DOM/_sidebars';
	import { sidebar_3_9 } from  './事件 event/_sidebars';
	import { sidebar_3_10 } from  './CSS/_sidebars';
	import { sidebar_3_11 } from  './表单/_sidebars';
	import { sidebar_3_12 } from  './json/_sidebars';
	import { sidebar_3_13 } from  './ajax/_sidebars';
	import { sidebar_3_14 } from  './XHR 2/_sidebars';
	import { sidebar_3_15 } from  './history/_sidebars';
	import { sidebar_3_16 } from  './优化/_sidebars';
	import { sidebar_3_17 } from  './es 6/_sidebars';

export const sidebar_2_2: SidebarItemConfig = {
  type: 'category',
  label: 'js',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/js/index'
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
sidebar_3_17]
};
