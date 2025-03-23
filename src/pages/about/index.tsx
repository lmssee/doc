import Layout from '@theme/Layout';
import { BackgroundRipple } from 'oops-ui/BackgroundRipple';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.center}>
        <div>也不知道起个什么名字好</div>
        <div>似若卡带碰到了卡顿</div>
        <div>似若犯了迷糊综合症</div>
        <div>好了，用户名 404 </div>
        <BackgroundRipple></BackgroundRipple>
      </div>
    </Layout>
  );
}
