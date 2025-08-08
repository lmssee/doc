import React, { type ReactNode } from 'react';
import type { Props } from '@theme/Footer/Copyright';
import Link from '@docusaurus/Link';
import styles from './index.module.scss';
import { xcn } from 'xcn';
import { publicSecurityNewWorkBadge } from '@site/src/theme/Footer/Copyright/public-security-new-work-badge';
import { useLocation } from '@docusaurus/router';

/**  作者  */
function Author({ author }: { author: string }) {
  /**  使用网页地址  */
  const location = useLocation();
  /**  是否是首页  */
  const isHome = location.pathname === '/';
  /**  链接  */
  const href = isHome ? '/about' : '/';
  /**  文本样式  */
  const style: React.CSSProperties = isHome
    ? {
        fontStyle: 'revert-layer',
      }
    : {
        fontStyle: 'italic',
      };
  return (
    <Link href={href} style={style} className={xcn(styles.copyRight)}>
      {isHome ? author : '首页'}
    </Link>
  );
}

/**  版权  */
export default function FooterCopyright({ copyright }: Props): ReactNode {
  if (copyright === 'earthnut')
    return (
      <div className="footer__copyright">
        <Link className={xcn(styles.copyRight, 'inlineBlock')} href="/">
          Copyright
        </Link>
        © {new Date().getFullYear()}
        <Author author={'earthnut'} />
      </div>
    );
  /**  是否是 cn */
  const cn = copyright === 'cn';
  /**  icp 的码  */
  const icpCode = `20024593${cn ? 0 : 1}`;
  /**  公安网备案码  */
  const recordCode = cn ? 11011302002071 : 11011302003362;
  return (
    <div className={xcn('footer__copyright', styles.icpFoot)}>
      <Link
        href={`https://lmssee.com/redirectedPage?url=http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${recordCode}`}
      >
        <img src={publicSecurityNewWorkBadge} height="10" alt="公安网" />
        京公安网备 <span>{recordCode}</span> 号
      </Link>
      <Link href="https://lmssee.com/redirectedPage?url=http://beian.miit.gov.cn/publish/query/indexFirst.action">
        <span>京 ICP {icpCode}</span>
      </Link>
      <Author author={'lmssee'} />
    </div>
  );
}
