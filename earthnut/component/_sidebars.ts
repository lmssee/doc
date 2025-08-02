import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';

export const ComponentSidebars: SidebarItemConfig = {
  type: 'category',
  label: '组件',
  collapsed: true,
  link: {
    type: 'doc',
    id: 'component/index',
  },
  items: ['component/layout'],
};
