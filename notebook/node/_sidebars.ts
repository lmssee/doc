import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_2_0 } from  './NodeJs/_sidebars';

export const sidebar_1_1: SidebarItemConfig = {
  type: 'category',
  label: 'node',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'node/index'
  },   
  items: [sidebar_2_0]
};
