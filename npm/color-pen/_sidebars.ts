import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';

export const ColorPenSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'color pen（彩色终端）',
  collapsed: true,
  link: {
    type: 'doc',
    id: 'color-pen/index',
  },
  items: ['color-pen/static'],
};
