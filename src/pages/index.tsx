import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.scss';
import { BackgroundRipple } from 'earthnut/BackgroundRipple';
import { xcn } from 'xcn';
import { useTimeId } from 'earthnut/useTimeId';

function HomepageHeader() {
  // 配置
  const { siteConfig } = useDocusaurusContext();
  // 涟漪的背景配置
  const [imgUrl, setImgUrl] = useState<null | string | string[]>(null);
  /**  渲染列表  */
  const renderList = useRef({
    data: ['默认', '单色', '渐变', '图像'],
    current: '默认',
  });
  /**  用于计时的定时器  */
  const timeId = useTimeId();
  /**  更改单前的展示形式  */
  function changeImgUrl(e: string) {
    const data = renderList.current.data;

    switch (e) {
      case data[0]:
        setImgUrl(null);
        break;
      case data[1]:
        setImgUrl(['#0ff']);
        break;
      case data[2]:
        setImgUrl(['#f36', '#ff3']);
        break;
      case data[3]:
        setImgUrl('/img/background-image-for-presentation.jpg');
        break;
      default:
        setImgUrl(null);
        break;
    }

    renderList.current.current = e;
  }

  useEffect(() => {
    const { data, current } = renderList.current;
    if (timeId.current) clearTimeout(timeId.current);
    timeId.current = setTimeout(
      () => {
        /**  当前的下标  */
        const subscript = data.indexOf(current);
        /**  下一个类型  */
        const nestType = [...data.slice(1), data[0]][subscript];
        changeImgUrl(nestType);
      },
      current === data[0] ? 9000 : 6000,
    );
  }, [imgUrl]);

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
        <div>
          {renderList.current.data.map(e => (
            <button key={e} onClick={() => changeImgUrl(e)}>
              {e}
            </button>
          ))}
        </div>
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
