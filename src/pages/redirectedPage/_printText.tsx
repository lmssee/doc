import { useContext, useEffect, useState } from 'react';
import { loadingStateContext } from './_loadingStateContext';

/**  需要加载到页面的文本 */
export function PrintText({
  list,
}: {
  /** 加载的文本信息 */
  list: string[];
}) {
  /// 当前展示文本
  const [text, setText] = useState('');
  //// 开始展示下一个
  const [nest, setNest] = useState(false);

  const { setLoadingState } = useContext(loadingStateContext);

  /** 逐字恢复已删除的内容 */
  useEffect(() => {
    /** 实际（当前展示）的文本内容 */
    let str: string = '';
    /** 剩余的文本 */
    let result: string = list[0];
    if (!result || !result.length) return;
    const timeId = setInterval(() => {
      if (result.length > 0) {
        str += result.slice(0, 1);
        result = result.slice(1);
        setText(str);
      } else {
        clearInterval(timeId); //// 真是个大聪明，这都能耽搁两钟头
        if (list.length > 2) {
          /// 设置下一个状态加载
          setNest(true);
        } else {
          setLoadingState('loading');
        }
      }
    }, 50);
    /** 清理定时器在需要的时候 */
    return () => clearInterval(timeId);
  }, []);

  return (
    <>
      <div>{text}</div>
      {nest && list.length > 2 && <PrintText list={list.slice(1) || []} />}
    </>
  );
}
