/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName website
 * @FileName index.tsx
 * @CreateDate  周六  12/14/2024
 * @Description 中转锚
 ****************************************************************************/

import directedToURL from './directedTo';
import { CSSProperties } from 'react';

/**************************************
 *
 * 跳转至路由
 *
 * 一般用于外站
 *
 **************************************/
export function TransitAnchor({
  children,
  href,
  target,
  style,
  className,
}: {
  children?: React.ReactElement | string | null | number;
  href: string;
  target?: '_bleak' | '_self' | '_top' | '_parent';
  /**  其他样式  */
  style?: CSSProperties;
  /**  其他 class  */
  className?: string;
}) {
  return (
    <a
      href={directedToURL(href)}
      target={target || '_blank'}
      referrerPolicy="no-referrer"
      rel="noopener"
      style={style}
      className={className || ''}
    >
      {children}
    </a>
  );
}
