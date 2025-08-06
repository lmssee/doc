import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { BackgroundRipple } from 'earthnut/BackgroundRipple';
import { useState } from 'react';
import { xcn } from 'xcn';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { HomeRippleButtons } from '../HomeRippleButtons';
export function HomepageHeader() {
  // 涟漪的背景配置
  const [imgUrl, setImgUrl] = useState<null | string | string[]>(null);
  // 配置
  const { siteConfig } = useDocusaurusContext();
  /**  当前的是否为暗黑模式  */

  return (
    <BackgroundRipple
      option={{
        imgUrl,
        raindropsTimeInterval: 1200,
      }}
      style={{
        boxShadow: '1px 1px 6px #0f66, 2px 2px 12px #fa6',
      }}
    >
      <header className={xcn(styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{/* {siteConfig.tagline} */}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg text--bold"
              to="/quickUse"
            >
              了解更多
            </Link>
          </div>
        </div>

        <HomeRippleButtons imgUrl={imgUrl} setImgUrl={setImgUrl} />
      </header>
    </BackgroundRipple>
  );
}
