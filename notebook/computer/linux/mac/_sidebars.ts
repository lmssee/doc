import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_1: SidebarItemConfig = {
  type: 'category',
  label: 'mac',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'computer/linux/mac/index'
  },   
  items: ['computer/linux/mac/sudo',
'computer/linux/mac/java',
'computer/linux/mac/zsh',
'computer/linux/mac/host',
'computer/linux/mac/homebrew',
'computer/linux/mac/application']
};
