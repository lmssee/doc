import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';

export const ACommandSidebar: SidebarItemConfig = {
  type: 'category',
  label: 'a command（终端工具）',
  collapsible: true,
  //     type: "generated-index";
  // slug?: string;
  // title?: string;
  // description?: string;
  // image?: string;
  // keywords?: string | readonly string[];
  link: {
    type: 'doc',
    id: 'a-command/index',
  },
  items: ['a-command/args', 'a-command/question', 'a-command/selection'],
};
