import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { xcn } from 'xcn';
import { Image } from 'earthnut';

type FeatureItem = {
  title: string;
  src: string;
  href: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'npm 工具包',
    src: '/img/home_feature_npm.png',
    href: './npm',
    description: (
      <>
        有一些 npm 工具包，包括不限于
        <code>
          <Link href="./npm/a-command" title="a-command">
            终端工具
          </Link>
        </code>
        、
        <code>
          <Link href="./npm/nry" title="更简洁的切换 npm registry">
            npm 源管理
          </Link>
        </code>
        、
        <code>
          <Link href="./npm/jja" title="简单的工具">
            工具包
          </Link>
        </code>
        、
        <code>
          <Link href="./npm/colored-table" title="彩色文本的表格输出">
            彩色表格
          </Link>
        </code>
        、
        <code>
          <Link href="./npm/color-pen" title="使用">
            终端输出彩色字
          </Link>
        </code>
        等
      </>
    ),
  },
  {
    title: 'edge 扩展',
    src: '/img/home_feature_edge_extends.png',
    href: './edge-extension/',
    description: (
      <>
        目前有两款 edge 的插件在开发并已在线可用。一款是简单的页面
        <Link href={'/edge-extension/simple-refresh'}>定时刷新器</Link>
        ，另一款是一个可
        <Link href="/edge-extension/reset-new-tab">
          自定义多种样式 edge 新标签页
        </Link>
      </>
    ),
  },
  {
    title: '一些奇怪的东西',
    href: 'https://earthnote.pages.dev',
    src: '/img/home_feature_information.png',
    description: <>还有一些乱七八糟的东西</>,
  },
];

function Feature({ title, src, description, href }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link href={href} draggable={false} className={xcn(styles.imgShell)}>
          <Image className={styles.featureImage} src={src} draggable={false} />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
