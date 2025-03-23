import { useEffect } from 'react';

export function Favicon({ text }: { text: string }) {
  useEffect(() => {
    const favicon = document.querySelector(
      'link[rel="icon"]',
    ) as HTMLLinkElement | null;
    if (!favicon) return;
    const oldHref = favicon.href;
    console.log('====================================');
    console.log(text);
    console.log('====================================');
    favicon.href = text;

    console.log(favicon);

    return () => {
      favicon.href = oldHref;
    };
  }, []);

  return <></>;
}
