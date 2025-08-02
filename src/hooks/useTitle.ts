import { useEffect } from 'react';

export function useTitle() {
  useEffect(() => {
    const oldIco = document.querySelector('link[rel=icon]');

    console.log('====================================');
    console.log(oldIco);
    console.log('====================================');

    return () => {};
  }, []);
}
