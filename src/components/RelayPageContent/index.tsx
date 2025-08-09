import { xcn } from 'xcn';

import styles from './index.module.scss';
import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

/**  站内页面中转页面  */
export function RelayPageContent({
  to,
  opacity = 0,
}: {
  to: string;
  opacity?: number;
}) {
  const router = useHistory();

  useEffect(() => router.push(to), []);
  return (
    <div
      className={xcn(styles.main, 'loading')}
      style={{
        opacity,
      }}
    >
      <div>
        <div>中转页面</div>
        <div>该页面是为旧版本数据预留的中转</div>
      </div>
    </div>
  );
}
