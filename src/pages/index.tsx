import { useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.scss';
import { BackgroundRipple } from 'earthnut/BackgroundRipple';
import { xcn } from 'xcn';
import { HomeRippleButtons } from '../components/HomeRippleButtons';

function HomepageHeader() {
  // 涟漪的背景配置
  const [imgUrl, setImgUrl] = useState<null | string | string[]>(null);
  // 配置
  const { siteConfig } = useDocusaurusContext();

  return (
    <BackgroundRipple option={{ imgUrl, raindropsTimeInterval: 1200 }}>
      <header className={xcn(styles.heroBanner)}>
        {/* <header className={xcn('hero--primary', styles.heroBanner)}> */}
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{/* {siteConfig.tagline} */}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              快速使用该水波涟漪背景 - 15s ⏱️
            </Link>
          </div>
        </div>
        <HomeRippleButtons imgUrl={imgUrl} setImgUrl={setImgUrl} />
      </header>
    </BackgroundRipple>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="我很幼稚，但我却不想长大"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
