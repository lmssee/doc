import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
import { isString } from 'a-type-of-js';

/**  使用前缀  */
const prefix = 'qqi/';

export const QQISidebars: SidebarItemConfig = {
  type: 'category',
  label: 'qqi',
  collapsed: true,
  link: {
    type: 'doc',
    id: prefix + 'index',
  },
  items: [
    'core',
    'log',
    'check-version',
    'remove-dog',
    'rollup-external',
    'copy-text',
    'dev',
  ].map(e => (isString(e) ? prefix + e : e)),
};
