import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import { BackgroundRipple } from 'earthnut/BackgroundRipple';
import { xcn } from 'xcn';
import styles from './index.module.scss';
import { DocCardListItem } from '../../DocCardList';
import { notFoundItems } from '@site/src/data/not-found';

export default function NotFoundContent({ className }: Props): ReactNode {
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
    <BackgroundRipple
      className={xcn(styles.content)}
      style={{
        height: 'calc(100vh - var(--ifm-navbar-height))',
      }}
    >
      <main className={clsx('container margin-vert--xl', className)}>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <Heading as="h1" className="hero__title">
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
          </div>
        </div>
      </main>
    </BackgroundRipple>
  );
}
