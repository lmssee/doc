import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './基础/_sidebars';
	import { sidebar_3_1 } from  './数据与算法/_sidebars';
	import { sidebar_3_2 } from  './软件工程/_sidebars';
	import { sidebar_3_3 } from  './面对对象/_sidebars';
	import { sidebar_3_4 } from  './数据库/_sidebars';
	import { sidebar_3_5 } from  './mySQL/_sidebars';
	import { sidebar_3_6 } from  './互联网/_sidebars';
	import { sidebar_3_7 } from  './信息安全/_sidebars';

export const sidebar_2_0: SidebarItemConfig = {
  type: 'category',
  label: '计算机基础',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/计算机基础/index'
  },   
  items: [sidebar_3_0,
sidebar_3_1,
sidebar_3_2,
sidebar_3_3,
sidebar_3_4,
sidebar_3_5,
sidebar_3_6,
sidebar_3_7]
};
