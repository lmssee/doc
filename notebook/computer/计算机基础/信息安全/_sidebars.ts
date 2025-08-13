import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_7: SidebarItemConfig = {
  type: 'category',
  label: '信息安全',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/计算机基础/信息安全/index'
  },   
  items: ['computer/计算机基础/信息安全/定义',
'computer/计算机基础/信息安全/防火墙',
'computer/计算机基础/信息安全/网络攻击',
'computer/计算机基础/信息安全/病毒']
};
