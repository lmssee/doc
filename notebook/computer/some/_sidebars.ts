import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_3_0 } from  './git/_sidebars';
	import { sidebar_3_1 } from  './some/_sidebars';

export const sidebar_2_2: SidebarItemConfig = {
  type: 'category',
  label: 'some',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/some/index'
  },   
  items: [sidebar_3_0,
sidebar_3_1]
};
