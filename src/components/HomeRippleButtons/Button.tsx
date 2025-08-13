import { xcn } from 'xcn';
import styles from './index.module.scss';
import { HomeRippleButtonProps } from './types';
import { useEffect, useRef } from 'react';

/**  按扭组  */
export const HomeRippleButton: React.FC<HomeRippleButtonProps> = ({
  onClick,
  isActive,
  label,
  isDeactivating,
}: HomeRippleButtonProps) => {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mask = maskRef.current;
    if (!mask) return;

    // 清除旧类
    mask.className = styles['highlight-mask'];

    if (isActive && !isDeactivating) {
      // 触发慢速滑入
      requestAnimationFrame(() => {
        mask.classList.add(styles['active']);
      });
    } else if (isDeactivating) {
      // 触发快速滑出
      requestAnimationFrame(() => {
        mask.classList.add(styles['deactivating']);
      });
    }
  }, [isActive, isDeactivating]);

  return (
    <div className={styles['button-wrapper']} onClick={onClick}>
      <button
        className={xcn(
          styles.button,
          { [styles.activeButton]: isActive },
          (isActive || isDeactivating) && styles['not-allowed'],
        )}
      >
        {label}
      </button>
      <div className={xcn(styles['highlight-mask'])} ref={maskRef}>
        <div></div>
      </div>
    </div>
  );
};
