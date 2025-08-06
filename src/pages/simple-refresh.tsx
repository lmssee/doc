import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import { useEffect } from 'react';

/**    */
export default function ResetNewTabs() {
  const router = useHistory();

  useEffect(() => {
    router.push('/edge-extension/simple-refresh');
  }, []);

  return (
    <Layout>
      <div>中转页面</div>
      <div>该页面是为旧版本数据预留的中转</div>
    </Layout>
  );
}
