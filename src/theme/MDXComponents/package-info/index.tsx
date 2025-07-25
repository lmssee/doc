import { xcn } from 'xcn';
import styles from './index.module.scss';
import { InfoType, PackageInfoProps } from './types';

export function PackageInfo({
  packageName,
  githubUserName = 'earthnutDev',
  githubRepoName,
}: PackageInfoProps) {
  if (!packageName || !githubUserName) {
    return null;
  }

  githubRepoName = githubRepoName ?? packageName;

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
      src: `${shieldsStart}npm/dm/${packageName}.svg?logo=npm&logoColor=rgb(0,0,0)&label=月下质量&labelColor=rgb(194,112,210)&color=rgb(0,0,0)`,
    },
    {
      alt: 'Total downloads',
      src: `${shieldsStart}npm/dt/${packageName}.svg?logo=npm&label=总下载量&labelColor=rgb(107,187,124)&color=rgb(0,0,0)`,
    },
  ];

  const githubInfo: InfoType[] = [
    {
      src:
        shieldsStart +
        'badge/%20👀_%20-%20源码查看-rgb(44, 14, 210)?logo=github',
      alt: '源码参看',
      href: `https://github.com/${githubUserName}/${githubRepoName}/`,
    },
    {
      src: shieldsStart + 'badge/‼️-bug_%20_提交-rgb(255,0,63)?logo=github',
      alt: 'bug 🙋‍♂️ 提交',
      href: `https://github.com/${githubUserName}/${githubRepoName}/issues`,
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
    </div>
  );
}
