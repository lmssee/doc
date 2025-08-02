import { useEffect } from 'react';

export function SetTitle() {
  useEffect(() => {
    const oldIco = document.querySelector('link[rel=icon]');

    console.log('====================================');
    console.log(oldIco);
    console.log('====================================');

    return () => {};
  }, []);

  return <></>;
}
