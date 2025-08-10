import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';

// const prefix

export const ColorPenSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'color pen',
  collapsed: true,
  link: {
    type: 'doc',
    id: 'color-pen/index',
  },
  items: ['color-pen/static'],
};
