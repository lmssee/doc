import { useTimeId } from 'earthnut';
import { useEffect, useState } from 'react';
import { HomeRippleButton } from './Button';
import styles from './index.module.scss';
import { xcn } from 'xcn';

/**  首页的按钮组  */
export function HomeRippleButtons({
  imgUrl,
  setImgUrl,
}: {
  imgUrl: null | string | string[];
  setImgUrl(imgUrl: null | string | string[]): void;
}) {
  /**  渲染列表  */
  const renderList = ['默认', '单色', '渐变', '图像'];
  /**  当前渲染的项  */
  const [current, setCurrent] = useState('默认');
  /** 当前背景被抽离的项   */
  const [deactivatingItem, setDeactivatingItem] = useState<null | string>(null);
  /**  延迟的时间  */
  const delayTime = 3000;

  /**  用于计时的定时器  */
  const timeId = useTimeId();
  /**  抽离定时器  */
  const deactivatingTimeId = useTimeId();
  /**  更改单前的展示形式  */
  function changeImgUrl(_current: string) {
    // 禁止提旧账
    if (current === _current || deactivatingItem === _current) return;
    // 当选选择的元素先抽离状态
    setDeactivatingItem(current);
    setCurrent(_current);
    setImgUrl(
      [
        null,
        ['#303'],
        ['#f36', '#ff3', '#3f9', '#6666'],
        '/img/background-image-for-presentation.jpg',
        null,
      ][renderList.indexOf(_current) || 0] || null,
    );
    deactivatingTimeId.current = setTimeout(
      () => setDeactivatingItem(null),
      480,
    );
  }

  useEffect(() => {
    if (timeId.current) clearTimeout(timeId.current);
    timeId.current = setTimeout(() => {
      /**  当前的下标  */
      const subscript = renderList.indexOf(current);
      /**  下一个类型  */
      const nestType = [...renderList.slice(1), renderList[0]][subscript];
      changeImgUrl(nestType);
    }, delayTime);
  }, [imgUrl]);

  return (
    <div className={xcn(styles.main)}>
      {renderList.map(item => (
        <HomeRippleButton
          key={item}
          onClick={() => changeImgUrl(item)}
          isActive={item === current}
          label={item}
          isDeactivating={deactivatingItem === item}
        />
      ))}
    </div>
  );
}
