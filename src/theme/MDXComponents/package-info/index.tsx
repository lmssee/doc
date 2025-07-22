import { xcn } from 'xcn';
import styles from './index.module.scss';
import { InfoType, PackageInfoProps } from './types';

export function PackageInfo({
  packageName,
  githubUserName = 'earthnutDev',
}: PackageInfoProps) {
  if (!packageName || !githubUserName) {
    return null;
  }

  const shieldsStart = 'https://img.shields.io/';

  const npmInfo: InfoType[] = [
    {
      alt: 'version',
      src: `${shieldsStart}npm/v/${packageName}.svg?logo=npm&logoColor=rgb(0,0,0)&label=最新版本&labelColor=rgb(73,73,228)&color=rgb(0,0,0)`,
    },
    {
      alt: 'NPM Last Update',
      src: `${shieldsStart}npm/last-update/${packageName}?logo=npm&label=版本最后更新&labelColor=rgb(255,36,63)&color=rgb(0,0,0)`,
    },
    // {
    //   alt: '📦 size',
    //   src: `${shieldsStart}bundlephobia/minzip/${packageName}.svg?logo=npm&label=%E5%8E%8B%E7%BC%A9%E5%8C%85%E5%A4%A7%E5%B0%8F&labelColor=rgb(201,158,140)&color=rgb(0,0,0)`,
    // },
    {
      alt: 'Monthly downloads',
      src: `${shieldsStart}npm/dm/${packageName}.svg?logo=npm&logoColor=rgb(0,0,0)&label=%E6%9C%88%E4%B8%8B%E8%BD%BD%E9%87%8F&labelColor=rgb(194,112,210)&color=rgb(0,0,0)`,
    },
    {
      alt: 'Total downloads',
      src: `${shieldsStart}npm/dt/${packageName}.svg?logo=npm&label=下载量&labelColor=rgb(107,187,124)&color=rgb(0,0,0)`,
    },
  ];

  const githubInfo: InfoType[] = [
    {
      src: shieldsStart + 'badge/👀_%20-源码查看-rgb(12,244,39)?logo=github',
      alt: '源码参看',
      href: `https://github.com/${githubUserName}/${packageName}/`,
    },
    {
      src: shieldsStart + 'badge/‼️-bug_%20_提交-rgb(255,0,63)?logo=github',
      alt: 'bug 🙋‍♂️ 提交',
      href: `https://github.com/${githubUserName}/${packageName}/issues`,
    },
    // {
    //   alt: 'GitHub last commit',
    //   src: `${shieldsStart}github/last-commit/${githubUserName}/${packageName}.svg?logo=github&logoColor=rgb(0,0,0)&label=%E6%9C%80%E5%90%8E%E6%8E%A8%E7%A0%81&labelColor=rgb(255,165,0)&color=rgb(0,0,0)`,
    //   href: `https://github.com/${githubUserName}/${packageName}`,
    // },
    // {
    //   alt: 'GitHub commit activity',
    //   src: `${shieldsStart}github/commit-activity/y/${githubUserName}/${packageName}.svg?logo=github&label=%E6%8E%A8%E7%A0%81%E6%95%B0&labelColor=rgb(128,0,128)&color=rgb(0,0,0)`,
    //   href: `https://github.com/${githubUserName}/${packageName}`,
    // },
    // {
    //   alt: 'Coverage Status',
    //   src: `${shieldsStart}coverallsCoverage/github/${githubUserName}/${packageName}?logo=coveralls&label=coveralls&labelColor=rgb(12,244,39)&color=rgb(0,0,0)`,
    //   href: `https://coveralls.io/github/${githubUserName}/${packageName}?branch=main`,
    // },
    // {
    //   alt: 'Codecov',
    //   src: `${shieldsStart}codecov/c/github/${githubUserName}/${packageName}/${githubBranchName}?logo=codecov&label=codecov&labelColor=rgb(8,245,245)&color=rgb(0,0,0)`,
    //   href: `https://codecov.io/gh/${githubUserName}/${packageName}`,
    // },
  ];
  return (
    <div className={xcn(styles.package_info)}>
      {[npmInfo, githubInfo].map(item => (
        <p key={item.length + 1}>
          {item.map(({ alt, src, href }) => (
            <a
              href={href || `https://www.npmjs.com/package/${packageName}`}
              key={alt}
              target="_blank"
              rel="noreferrer"
            >
              <img alt={alt} src={src} />
            </a>
          ))}
        </p>
      ))}

      {/* <p className="p_p__5vQ_t">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://lmssee.com/redirectedPage?url=https%3A%2F%2Fgithub.com%2FearthnutDev%2Fa-type-of-js%2Fblob%2Fmain%2FCHANGELOG.md"
        >
          <img
            alt="查看 📔 日志"
            src="https://img.shields.io/badge/%F0%9F%91%80-%E6%97%A5_%20_%E5%BF%97-rgb(0,125,206)"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://lmssee.com/redirectedPage?url=https%3A%2F%2Fgithub.com%2FearthnutDev%2Fa-type-of-js%2Fissues"
        >
          <img
            alt="bug 🙋‍♂️ 提交"
            src="https://img.shields.io/badge/%E2%98%A3%EF%B8%8F-bug_%20_%E6%8F%90%E4%BA%A4-rgb(255,0,63)"
          />
        </a>
      </p> */}
    </div>
  );
}
