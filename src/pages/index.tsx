import { useEffect, useState, type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { HomepageHeader } from '../components/HomepageHeader';
import { BackgroundRipple } from 'earthnut';
import { useColorMode } from '@docusaurus/theme-common';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="我们不是神，只有努力才能更接近神"
    >
      <Content />
    </Layout>
  );
}

function Content() {
  const { colorMode } = useColorMode();

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setDarkMode(colorMode === 'dark');
  }, [colorMode]);

  return (
    <>
      <BackgroundRipple
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 'auto',
        }}
        option={{
          darkMode: darkMode,
        }}
      >
        <HomepageHeader />
        <main style={{ margin: 'auto' }}>
          <HomepageFeatures />
        </main>
      </BackgroundRipple>
    </>
  );
}
