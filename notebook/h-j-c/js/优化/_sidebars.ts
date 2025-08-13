import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_16: SidebarItemConfig = {
  type: 'category',
  label: '优化',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/js/优化/index'
  },   
  items: ['h-j-c/js/优化/一般',
'h-j-c/js/优化/控制内存',
'h-j-c/js/优化/页面重构']
};
