import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
import { isString } from 'a-type-of-js';

/**  前缀  */
const prefix = 'a-command/';

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
    id: prefix + 'index',
  },
  items: ['args', 'question', 'selection'].map(e =>
    isString(e) ? prefix + e : e,
  ),
};
