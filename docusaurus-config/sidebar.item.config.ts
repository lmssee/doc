import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
import { isBusinessEmptyString, isString, isUndefined } from 'a-type-of-js';

export type CreateSideBarItemOption = {
  /** 前缀 */
  prefix: string;
  /** 显示标签 */
  label?: string;
  /** 子项列表 */
  items?: (string | SidebarItemConfig)[];
};

/** 快速构建一个内侧栏 */
export function createSidebarItem({
  prefix,
  label,
  items,
}: CreateSideBarItemOption): SidebarItemConfig {
  if (isUndefined(items)) items = [];
  if (isUndefined(label)) label = prefix.replaceAll('/', '_');
  if (
    !isString(prefix) ||
    isBusinessEmptyString(prefix) ||
    !isString(label) ||
    isBusinessEmptyString(label)
  ) {
    throw new ReferenceError(`类型错误`);
  }

  // 整理后续
  prefix = prefix.replaceAll('//', '/');
  if (!prefix.endsWith('/')) prefix += '/';

  return {
    type: 'category',
    label,
    collapsed: true,
    link: {
      type: 'doc',
      id: prefix + 'index',
    },
    items: items.map(e => (isString(e) ? prefix + e : e)),
  };
}
