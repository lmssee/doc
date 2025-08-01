import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';

export const QQISidebars: SidebarItemConfig = {
  type: 'category',
  label: 'qqi',
  collapsed: true,
  link: {
    type: 'doc',
    id: 'qqi/index',
  },
  items: [
    'qqi/core',
    'qqi/log',
    'qqi/check-version',
    'qqi/remove-dog',
    'qqi/rollup-external',
    'qqi/copy-text',
    'qqi/dev',
  ],
};
