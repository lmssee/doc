import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_4: SidebarItemConfig = {
  type: 'category',
  label: '数据库',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/计算机基础/数据库/index'
  },   
  items: ['computer/计算机基础/数据库/概念',
'computer/计算机基础/数据库/特点',
'computer/计算机基础/数据库/系统结构',
'computer/计算机基础/数据库/数据模型',
'computer/计算机基础/数据库/关系模型']
};
