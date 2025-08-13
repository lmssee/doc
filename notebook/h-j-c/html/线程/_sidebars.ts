import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_11: SidebarItemConfig = {
  type: 'category',
  label: '线程',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'h-j-c/html/线程/index'
  },   
  items: ['h-j-c/html/线程/简介',
'h-j-c/html/线程/原理',
'h-j-c/html/线程/使用',
'h-j-c/html/线程/创建',
'h-j-c/html/线程/方法',
'h-j-c/html/线程/通信',
'h-j-c/html/线程/销毁',
'h-j-c/html/线程/并发',
'h-j-c/html/线程/绘图']
};
