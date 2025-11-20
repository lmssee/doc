import { useEffect, useState, type ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { HomepageHeader } from '../components/HomepageHeader';
import { LazyBackgroundRipple } from 'enr';
import { useColorMode } from '@docusaurus/theme-common';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn! Master! Share!  Solve!  Explore!  Evolve! "
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
    <LazyBackgroundRipple
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
    </LazyBackgroundRipple>
  );
}
