/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName website
 * @FileName index.tsx
 * @CreateDate  周五  12/20/2024
 * @Description 一个简易的倒计时
 ****************************************************************************/
'use client';

import { ReactNode, ReactPortal, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './index.module.scss';
import directedToURL from '../transitAnchors/directedTo';
import { CountdownBuoysProps } from './types';

/**************************************
 *
 * 倒计时浮标
 *
 * 在未指定倒计时结束跳转路由时默认跳转到主页
 *
 **************************************/
export default function CountdownBuoys({ url, delay }: CountdownBuoysProps) {
  const [content, setContent] = useState<ReactNode | ReactPortal>(<></>);

  useEffect(() => {
    /**  计数可用倒计时  */
    let animationDuration = Math.abs(Math.round(delay as number)) || 3800;
    /**  检验倒计时时间的有效性  */
    animationDuration = isFinite(animationDuration) ? animationDuration : 0;

    const timeId = setTimeout(() => {
      console.log('====================================');
      console.log(url);
      console.log('====================================');
      if (!url) return history.back();
      console.log(url);
      console.log(url);
      /**  未设定路由则跳转至 `/`  */
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return window.open(directedToURL(url), '_blank');
      }
      location.replace(url);
    }, animationDuration);

    const style = {
      animationDuration: `${animationDuration / 1000}s`,
    };

    setContent(
      createPortal(
        <div className={styles.countdownBuoys} style={style}></div>,
        document.body,
      ),
    );

    return () => {
      clearTimeout(timeId);
    };
  }, [url]);

  return content;
}
