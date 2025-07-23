import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
          <a href="./a-command" title="a-command">
            终端工具
          </a>
        </code>
        、
        <code>
          <a href="./nry" title="更简洁的切换 npm registry">
            npm 源管理
          </a>
        </code>
        、
        <code>
          <a href="./jja" title="简单的工具">
            工具包
          </a>
        </code>
        、
        <code>
          <a href="./colored-table" title="彩色文本的表格输出">
            彩色表格
          </a>
        </code>
        、
        <code>
          <a href="./color-pen" title="使用">
            终端输出彩色字
          </a>
        </code>
        等
      </>
    ),
  },
  {
    title: 'edge 扩展',
    src: '/img/home_feature_edge_extends.png',
    href: './reset-new-tab',
    description: (
      <>
        目前有两款 edge
        的插件在开发并已在线可用。一款是简单的页面定时刷新器，另一款是一个可自定义
        多种样式 edge 新标签页
      </>
    ),
  },
  {
    title: '一些奇怪的东西',
    href: './notebook',
    src: '/img/home_feature_information.png',
    description: <>还有一些乱七八糟的东西</>,
  },
];

function Feature({ title, src, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={src} />
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
