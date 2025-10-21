import { createSidebarsConfig } from '../docusaurus-config/sidebars.config';
import { QQISidebars } from './qqi/_sidebars';
import { ACommandSidebar } from './a-command/_sidebars';
import { ColorPenSidebar } from './color-pen/_sidebars';

export default createSidebarsConfig({
  items: [
    'index',
    'nry',
    'gvv',
    'vjj',
    'jja',
    'colored-table',
    'create-a-npm',
    QQISidebars,
    'hhf-hot',
    ACommandSidebar,
    'a-node-tools',
    ColorPenSidebar,
    'a-js-tools',
    'a-type-of-js',
    'xcn',
    'a-element-inline-style',
    'pjj',
    'a-edge-extends-types',
  ],
});
