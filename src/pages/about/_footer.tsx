/****************************************************************************
 * @Author earthnut
 * @Email earthnut.dev@outlook.com
 * @ProjectName website
 * @FileName footer.tsx
 * @CreateDate  周六  12/14/2024
 * @Description 脚部
 ****************************************************************************/
import { TransitAnchor } from '../../components/transitAnchors';
import { footerList } from './_types';
import styles from './index.module.scss';

export function Footer() {
  const list: footerList = [
    {
      href: 'mailto:earthnut.dev@icloud.com?subject=hello&cc=earthnut.dev@qq.com,letmiseesee@gmail.com&bcc=earthnut.dev@outlook.com&body=hi:',
      src: 'outlook',
      title: 'earthnut.dev@outlook.com',
    },
    {
      href: 'https://github.com/lmssee',
      src: 'github',
    },
    {
      href: 'https://www.npmjs.com/~earthnut',
      src: 'npm',
    },
    {
      href: 'https://x.com/letmiseesee',
      src: 'x',
    },
  ];

  return (
    <div className={styles.footer}>
      {list.map(e => (
        <div key={e.src}>
          <TransitAnchor href={e.href}>
            <>
              <img
                src={`/svg/${e.src}.svg`}
                alt={`a svg of ${e.src}`}
                title={e.title || 'earthnut'}
              />
              {e.text || e.src}
            </>
          </TransitAnchor>
        </div>
      ))}
    </div>
  );
}
