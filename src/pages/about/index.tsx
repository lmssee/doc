import Layout from '@theme/Layout';
import styles from './index.module.scss';
import { xcn } from 'xcn';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Contact } from './_Contact';
import { BackgroundRipple } from 'earthnut';
import Link from '@docusaurus/Link';
import { CustomDocusaurusConfig } from '@docusaurus/types/src/config';

export default function Home() {
  const siteConfig = useDocusaurusContext()
    .siteConfig as CustomDocusaurusConfig;

  const time = new Date().toLocaleString();
  return (
    <Layout>
      <div style={{ width: '100%', height: '100%' }}>
        <BackgroundRipple option={{}}>
          <div className={styles.center}>
            <h1 className={xcn('text--center', 'text-red')}>
              你好，{siteConfig.title}
            </h1>
            <div>你好，我， {siteConfig.title}。</div>
          </div>
          <Contact />
          <div>
            技术支持：
            <Link href="https://docusaurus.io/">docusaurus</Link>
          </div>
          <div>
            本次构建时间 ：{siteConfig?.customFields?.buildTime ?? time}
          </div>
        </BackgroundRipple>
      </div>
    </Layout>
  );
}
