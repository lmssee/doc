import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_2: SidebarItemConfig = {
  type: 'category',
  label: '软件工程',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/计算机基础/软件工程/index'
  },   
  items: ['computer/计算机基础/软件工程/软件',
'computer/计算机基础/软件工程/阶段',
'computer/计算机基础/软件工程/软件工程',
'computer/计算机基础/软件工程/生命周期',
'computer/计算机基础/软件工程/结构化方法']
};
