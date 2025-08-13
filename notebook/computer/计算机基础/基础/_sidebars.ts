import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_0: SidebarItemConfig = {
  type: 'category',
  label: '基础',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/计算机基础/基础/index'
  },   
  items: ['computer/计算机基础/基础/基础',
'computer/计算机基础/基础/进制',
'computer/计算机基础/基础/操作系统']
};
