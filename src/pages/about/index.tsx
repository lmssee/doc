import Layout from '@theme/Layout';
import { BackgroundRipple } from 'earthnut/BackgroundRipple';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.center}>
        <h1 className="colorText text--center">你好，花生亻</h1>
        <div>你好，我是花生亻，不是花生仁。</div>
        <div>因为，</div>
        <div>我不二！！！！！</div>
        <div>好吧，叫我`不二花生`也可以原谅你</div>
        <BackgroundRipple></BackgroundRipple>
      </div>
    </Layout>
  );
}
