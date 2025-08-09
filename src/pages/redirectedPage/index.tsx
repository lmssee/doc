/****************************************************************************
 * @Author earthnut
 * @Email earthnut.dev@outlook.com
 * @ProjectName reset new tab
 * @FileName loading.tsx
 * @CreateDate  周日  09/29/2024
 * @Description 加载中页面
 ****************************************************************************/
import { useState } from 'react';
import styles from './index.module.scss';
import React from 'react';
import CountdownBuoys from '../../components/countdownBuoys';
import { useGetList } from './_useGetList';
import { loadingStateContext } from './_loadingStateContext';
import { PrintText } from './_printText';
import { LazyBackgroundRipple } from 'earthnut';

/** 中转页面 */
export default function Page() {
  /**  等发状态  */
  const [loadingState, setLoadingState] = useState<'parse' | 'loading'>(
    'parse',
  );

  /** 获取数据 */
  const list = useGetList();

  return (
    <loadingStateContext.Provider value={{ setLoadingState, loadingState }}>
      <div className={`${styles.container}`}>
        <LazyBackgroundRipple>
          {(loadingState === 'parse' && (
            <div className="center">
              <div className="colorText">加载中....</div>
              {(list.length && <PrintText list={list} />) || <></>}
              <CountdownBuoys delay={10000} />
            </div>
          )) || <div className={`loading  center  ${styles.loading}`}></div>}
        </LazyBackgroundRipple>
      </div>
    </loadingStateContext.Provider>
  );
}
