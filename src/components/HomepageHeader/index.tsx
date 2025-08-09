import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { LazyBackgroundRipple } from 'earthnut';
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
    <LazyBackgroundRipple
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
          <Heading as="h1" className={xcn('hero__title', styles.mark)}>
            {siteConfig.title}
          </Heading>
          <div className={styles.buttons}>
            <Link
              className={xcn(
                'button button--secondary button--lg text--bold',
                styles.button,
              )}
              to="/quickUse"
            >
              一个简单到只有<span className={xcn(styles.mark)}>几个</span>组件的
              <span className={xcn(styles.dust)}>UI</span>
            </Link>
          </div>
        </div>

        <HomeRippleButtons imgUrl={imgUrl} setImgUrl={setImgUrl} />
      </header>
    </LazyBackgroundRipple>
  );
}
