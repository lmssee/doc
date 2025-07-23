import Layout from '@theme/Layout';
import styles from './index.module.scss';
import { xcn } from 'xcn';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Contact } from './_Contact';
import { BackgroundRipple } from 'earthnut/BackgroundRipple';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

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
        </BackgroundRipple>
      </div>
    </Layout>
  );
}
