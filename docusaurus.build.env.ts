/****************************************************************************
 *  @Author earthnut
 *  @Email earthnut.dev@outlook.com
 *  @ProjectName doc
 *  @FileName docusaurus.build.env.ts
 *  @CreateDate  周日  02/02/2025
 *  @Description 打包环境
 ****************************************************************************/

import { publicSecurityNewWorkBadge } from './publicSecurityNewWorkBadge';

/**************************************
 *
 * 打包的类型
 *
 * - com
 * - comEarthnut
 * - cn
 * - cnEarthnut
 * - io
 *
 **************************************/

const TARGET_DOMAIN = process.env.TARGET_DOMAIN;
/**
 * 构建环境
 */
const target_domain = [
  'com',
  'comEarthnut',
  'cn',
  'cnEarthnut',
  'lmssee',
  'earthnutDev',
].includes(TARGET_DOMAIN)
  ? TARGET_DOMAIN
  : 'com';

const com: BuildEnv = {
  url: 'https://lmssee.com',
  copyright: createCopyright(false),
  favicon: '/icon/com/favicon.ico',
  logo: '/icon/com/logo.png',
  title: '左左和右右',
  baseUrl: '/',
};

const comEarthnut: BuildEnv = {
  ...com,
  baseUrl: '/earthnut/',
};
const cn: BuildEnv = {
  url: 'https://lmssee.cn',
  copyright: createCopyright(),
  favicon: '/icon/cn/favicon.ico',
  logo: '/icon/cn/logo.png',
  title: '随笔记余生',
  baseUrl: '/',
};

const cnEarthnut: BuildEnv = {
  ...cn,
  baseUrl: '/earthnut/',
};

const lmssee: BuildEnv = {
  url: 'https://lmssee.github.io',
  copyright: `Copyright © ${new Date().getFullYear()} <a href="/about">earthnut</a>`,
  favicon: '/icon/dev/favicon.ico',
  logo: '/icon/dev/logo.png',
  title: '花生亻',
  baseUrl: '/',
};
const earthnutDev: BuildEnv = {
  ...lmssee,
  url: 'https://earthnutDev.github.io',
};
/**************************************
 *
 * 环境值
 *
 **************************************/
export const { title, url, copyright, favicon, logo, baseUrl } = {
  com,
  comEarthnut,
  cn,
  cnEarthnut,
  lmssee,
  earthnutDev,
}[target_domain];

/**
 * 创建动态的页面
 **/
function createCopyright(cn: boolean = true) {
  const recordCode = cn ? 11011302002071 : 11011302003362;
  return `
    <a
    href="https://lmssee.com/redirectedPage?url=http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${recordCode}"
    target="_blank"
    rel="noreferrer"
    >
    <img src="${publicSecurityNewWorkBadge}" height="10" alt="公安网" />
    京公网安备 <span>${recordCode}</span> 号
    </a>
    <a
    href="https://lmssee.com/redirectedPage?url=http://beian.miit.gov.cn/publish/query/indexFirst.action"
    target="_blank"
    rel="noreferrer"
    >
    京<span>ICP</span> 备 <span>20024593</span> 号 - ${Number(!cn) + 1}
    </a> <a href="/about">lmssee</a>`;
}

type BuildEnv = {
  /**
   * 网站标题
   */
  title: string;
  /**
   * 网站地址
   */
  url: string;
  /**
   * 网站版权
   */
  copyright: string;
  /**
   * 网站路由的相对跟路径
   **/
  baseUrl: '/' | '/earthnut/';
  /**
   * 网站图标
   */
  favicon: string;
  /**
   * 网站logo
   */
  logo: string;
};
