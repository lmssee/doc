import { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';
import { getRandomString } from 'a-js-tools';
import { isBusinessEmptyString, isString } from 'a-type-of-js';

export type CreateSidebarsOptions = {
  /** 侧栏的标签名 */
  name?: string;
  /**  */
  items: (string | SidebarItemConfig)[];
};

/** 构建简单的布局侧栏 */
export function createSidebarsConfig({
  name,
  items,
}: CreateSidebarsOptions): SidebarsConfig {
  if (!isString(name) || isBusinessEmptyString(name)) {
    name = getRandomString({
      length: 16,
      includeUppercaseLetters: true,
      includeNumbers: true,
    });
  }

  return Object.fromEntries([[name, items]]);
}
