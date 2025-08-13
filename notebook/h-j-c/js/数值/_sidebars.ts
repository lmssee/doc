import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_1: SidebarItemConfig = {
  type: 'category',
  label: '数值',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/js/数值/index'
  },   
  items: ['h-j-c/js/数值/简介',
'h-j-c/js/数值/二进制',
'h-j-c/js/数值/八进制',
'h-j-c/js/数值/十进制',
'h-j-c/js/数值/十六进制',
'h-j-c/js/数值/特殊值',
'h-j-c/js/数值/对象',
'h-j-c/js/数值/浮点数',
'h-j-c/js/数值/溢出',
'h-j-c/js/数值/bigInt',
'h-j-c/js/数值/Math']
};
