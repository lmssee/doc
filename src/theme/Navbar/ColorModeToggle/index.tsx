import React, { useEffect, useState, type ReactNode } from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import type { Props } from '@theme/Navbar/ColorModeToggle';
import styles from './styles.module.css';
import { useLocation } from '@docusaurus/router';

export default function NavbarColorModeToggle({ className }: Props): ReactNode {
  const { disableSwitch, respectPrefersColorScheme } =
    useThemeConfig().colorMode;
  const { setColorMode, colorMode } = useColorMode();
  /**  使用 docusaurus 路由  */
  const _location = useLocation();

  const [darkMode, setDarkMode] = useState(colorMode === 'dark');

  useEffect(() => {
    // 当前路径不与实际路径相同
    if (
      decodeURIComponent(_location.pathname) !==
      decodeURIComponent(location.pathname)
    ) {
      console.log(_location);
      const url = `${_location.pathname}${_location.search}${_location.hash}`;
      window.location.replace(url);
    }
  }, []);

  useEffect(() => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)');
    function changeCallback() {
      // 根据当前的环境自己设置当前的值
      setColorMode(dark.matches ? 'dark' : 'light');
    }

    dark.addEventListener('change', changeCallback);
    // 移除监听
    return () => dark.removeEventListener('change', changeCallback);
  }, []);

  useEffect(() => {
    setDarkMode(colorMode === 'dark');
  }, [colorMode]);

  if (disableSwitch) {
    return null;
  }

  // 标准的返回模式的跳转
  return (
    <ColorModeToggle
      className={className}
      buttonClassName={darkMode ? styles.darkNavbarColorModeToggle : undefined}
      respectPrefersColorScheme={respectPrefersColorScheme}
      value={darkMode ? 'dark' : 'light'}
      onChange={() => setColorMode(darkMode ? 'light' : 'dark')}
    />
  );
}
