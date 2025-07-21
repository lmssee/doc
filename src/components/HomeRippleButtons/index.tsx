import { useTimeId } from 'earthnut/useTimeId';
import { useEffect, useRef } from 'react';

/**  首页的按钮组  */
export function HomeRippleButtons({
  imgUrl,
  setImgUrl,
}: {
  imgUrl: null | string | string[];
  setImgUrl(imgUrl: null | string | string[]): void;
}) {
  /**  渲染列表  */
  const renderList = useRef({
    data: ['默认', '单色', '渐变', '图像'],
    current: '默认',
  });
  /**  用于计时的定时器  */
  const timeId = useTimeId();
  /**  更改单前的展示形式  */
  function changeImgUrl(e: string) {
    const data = renderList.current.data;

    switch (e) {
      case data[0]:
        setImgUrl(null);
        break;
      case data[1]:
        setImgUrl(['#0ff']);
        break;
      case data[2]:
        setImgUrl(['#f36', '#ff3']);
        break;
      case data[3]:
        setImgUrl('/img/background-image-for-presentation.jpg');
        break;
      default:
        setImgUrl(null);
        break;
    }

    renderList.current.current = e;
  }

  useEffect(() => {
    const { data, current } = renderList.current;
    if (timeId.current) clearTimeout(timeId.current);
    timeId.current = setTimeout(
      () => {
        /**  当前的下标  */
        const subscript = data.indexOf(current);
        /**  下一个类型  */
        const nestType = [...data.slice(1), data[0]][subscript];
        changeImgUrl(nestType);
      },
      current === data[0] ? 9000 : 6000,
    );
  }, [imgUrl]);

  return (
    <div>
      {renderList.current.data.map(e => (
        <button key={e} onClick={() => changeImgUrl(e)}>
          {e}
        </button>
      ))}
    </div>
  );
}
