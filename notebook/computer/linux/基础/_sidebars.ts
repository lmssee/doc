import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_0: SidebarItemConfig = {
  type: 'category',
  label: '基础',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/linux/基础/index'
  },   
  items: ['computer/linux/基础/进程命令',
'computer/linux/基础/操作文件',
'computer/linux/基础/查看文件',
'computer/linux/基础/网络命令',
'computer/linux/基础/打包解压',
'computer/linux/基础/其他命令',
'computer/linux/基础/ssh',
'computer/linux/基础/screen',
'computer/linux/基础/ftp',
'computer/linux/基础/文件属性']
};
