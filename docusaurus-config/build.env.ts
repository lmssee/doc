/****************************************************************************
 *  @Author earthnut
 *  @Email earthnut.dev@outlook.com
 *  @ProjectName doc
 *  @FileName docusaurus.build.env.ts
 *  @CreateDate  周日  02/02/2025
 *  @Description 打包环境
 ****************************************************************************/

import { target_domain } from './env';

const com: BuildEnv = {
  url: 'https://lmssee.com',
  copyright: 'com',
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
  copyright: 'cn',
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
  copyright: 'earthnut',
  favicon: '/icon/dev/favicon.ico',
  logo: '/icon/dev/logo.png',
  title: '花生亻',
  baseUrl: '/',
};
const earthnutDev: BuildEnv = {
  ...lmssee,
  url: 'https://earthnutDev.github.io',
};
/**
 *
 * 环境值
 *
 */
export const { title, url, copyright, favicon, logo, baseUrl } = {
  com,
  comEarthnut,
  cn,
  cnEarthnut,
  lmssee,
  earthnutDev,
}[target_domain];

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
