import { useEffect } from 'react';

export function Favicon({ text }: { text: string }) {
  useEffect(() => {
    const favicon = document.querySelector(
      'link[rel="icon"]',
    ) as HTMLLinkElement | null;
    if (!favicon) return;

    const oldHref = favicon.href;
    favicon.href = text;
    return () => {
      favicon.href = oldHref;
    };
  }, []);

  return <></>;
}
