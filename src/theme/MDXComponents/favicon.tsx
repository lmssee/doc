import { useEffect, useState } from 'react';

export function Favicon({ href = '' }: { href?: string }) {
  const [currentHref, setCurrentHref] = useState<string | null>(null);

  useEffect(() => {
    const favicon = document.querySelector(
      'link[rel="icon"]',
    ) as HTMLLinkElement | null;
    if (!favicon) return;
    /**  旧的图标  */
    const oldHref = favicon.href;

    if (currentHref) {
      favicon.href = currentHref;
    }

    return () => {
      favicon.href = oldHref;
    };
  }, [currentHref]);

  useEffect(() => {
    setCurrentHref(href);
  }, [href]);

  return <></>;
}
