import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';

export const CustomHooksSidebars: SidebarItemConfig = {
  type: 'category',
  label: '自定义钩子',
  collapsed: true,
  link: {
    type: 'doc',
    id: 'custom-hooks/index',
  },
  items: ['custom-hooks/use-time-id'],
};
