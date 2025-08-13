import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_1: SidebarItemConfig = {
  type: 'category',
  label: 'some',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/some/some/index'
  },   
  items: ['computer/some/some/pc',
'computer/some/some/cmd',
'computer/some/some/markdown']
};
