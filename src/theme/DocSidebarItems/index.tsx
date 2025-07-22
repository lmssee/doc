import React, { type ReactNode } from 'react';
import DocSidebarItems from '@theme-original/DocSidebarItems';
import type DocSidebarItemsType from '@theme/DocSidebarItems';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof DocSidebarItemsType>;

export default function DocSidebarItemsWrapper(props: Props): ReactNode {
  /// 过滤掉 edge 扩展的根导航
  const items = props.items.filter(
    e => e.docId !== 'index' && e.docId !== 'instruction',
  );

  return (
    <>
      <DocSidebarItems {...props} items={items} />
    </>
  );
}
