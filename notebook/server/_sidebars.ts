import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
	import { sidebar_2_0 } from  './nginx/_sidebars';

export const sidebar_1_3: SidebarItemConfig = {
  type: 'category',
  label: 'server',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'server/index'
  },   
  items: [sidebar_2_0]
};
