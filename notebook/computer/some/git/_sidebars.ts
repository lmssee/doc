import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_0: SidebarItemConfig = {
  type: 'category',
  label: 'git',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/some/git/index'
  },   
  items: ['computer/some/git/命令',
'computer/some/git/基础',
'computer/some/git/配置',
'computer/some/git/初始化',
'computer/some/git/操作',
'computer/some/git/提交',
'computer/some/git/分支',
'computer/some/git/合并',
'computer/some/git/克隆',
'computer/some/git/拉取',
'computer/some/git/历史',
'computer/some/git/版本',
'computer/some/git/管道',
'computer/some/git/变基',
'computer/some/git/远程库']
};
