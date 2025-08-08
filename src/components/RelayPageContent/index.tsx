import { xcn } from 'xcn';

import styles from './index.module.scss';
import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';

/**  站内页面中转页面  */
export function RelayPageContent({ url }: { url: string }) {
  const router = useHistory();

  useEffect(() => router.push(url), []);
  return (
    <Layout title={url}>
      <div className={xcn(styles.main, 'loading')}>
        <div>
          <div>中转页面</div>
          <div>该页面是为旧版本数据预留的中转</div>
        </div>
      </div>
    </Layout>
  );
}
