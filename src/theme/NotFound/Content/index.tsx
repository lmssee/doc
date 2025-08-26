import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import { LazyBackgroundRipple } from 'enr';
import { xcn } from 'xcn';
import styles from './index.module.scss';
import { DocCardListItem } from '../../DocCardList';
import { notFoundItems } from '@site/src/data/not-found';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function NotFoundContent({ className }: Props): ReactNode {
  return <BrowserOnly>{() => <Content className={className} />}</BrowserOnly>;
}

function Content({ className }: { className: string }) {
  /**
   * ```ts
   *  {
   *   docId: string
   *   href: string
   *   label: string
   *   type: 'link'
   *   unlisted: false
   *
   * }
   * ```
   */
  return (
    <LazyBackgroundRipple
      style={{
        height: 'calc(100vh - var(--ifm-navbar-height))',
      }}
    >
      <main className={clsx('container', className, styles.content)}>
        <Heading as="h1" className={xcn('hero__title', styles.heading)}>
          您访问的网站不存在
        </Heading>
        <p>不过也可能有其他的东西存在</p>
        <div className={xcn(styles.itemList)}>
          {notFoundItems.map(e => (
            <DocCardListItem
              item={{ ...e, type: 'link', unlisted: false }}
              key={e.href}
            />
          ))}
        </div>
      </main>
    </LazyBackgroundRipple>
  );
}
