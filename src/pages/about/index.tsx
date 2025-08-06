import Layout from '@theme/Layout';
import styles from './index.module.scss';
import { xcn } from 'xcn';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Contact } from './_Contact';
import { BackgroundRipple } from 'earthnut';
import Link from '@docusaurus/Link';
import { CustomDocusaurusConfig } from '@docusaurus/types/src/config';
import { useEffect, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Home() {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

function Content() {
  const siteConfig = useDocusaurusContext()
    .siteConfig as CustomDocusaurusConfig;

  const { colorMode } = useColorMode();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(colorMode === 'dark');
  }, [colorMode]);

  const time = new Date().toLocaleString();
  return (
    <BackgroundRipple
      option={{ darkMode }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 'auto',
        alignContent: 'space-around',
        verticalAlign: 'middle',
        padding: ' 3rem',
        // justifyContent: 'space-between',
      }}
    >
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
      <div>本次构建时间 ：{siteConfig?.customFields?.buildTime ?? time}</div>
    </BackgroundRipple>
  );
}
