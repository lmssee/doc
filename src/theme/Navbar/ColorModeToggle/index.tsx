import React, { useEffect, useState, type ReactNode } from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import type { Props } from '@theme/Navbar/ColorModeToggle';
import styles from './styles.module.css';

export default function NavbarColorModeToggle({ className }: Props): ReactNode {
  const { disableSwitch, respectPrefersColorScheme } =
    useThemeConfig().colorMode;
  const { setColorMode, colorMode } = useColorMode();

  const [darkMode, setDarkMode] = useState(colorMode === 'dark');

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
