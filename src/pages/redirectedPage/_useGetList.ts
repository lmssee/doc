import { useEffect, useState } from 'react';

/** 获取当前的数据 */
export function useGetList() {
  /** 设置数据列 */
  const [list, setList] = useState<string[]>([]);

  /** 进入页面加载 */
  useEffect(() => {
    let url =
      location.search.replace(/\?url=(.*)/, '$1') || 'https://lmssee.com';
    url = decodeURIComponent(url);
    document.title = url;
    setList(['解析地址中', '解析完成', '准备跳转'].concat(url || ''));
    let timeId = setTimeout(() => {
      if (/^mailto:/.test(url || ''))
        timeId = setTimeout(() => window.close(), 12000); /// 关闭窗口
      else if (!/^https?:\/\//.test(url || '')) url = 'https://' + url;
      window.location.replace(url as string);
    });
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return list;
}
