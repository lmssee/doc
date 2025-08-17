/****************************************************************************
 *  @Author earthnut
 *  @Email earthnut.dev@outlook.com
 *  @ProjectName doc
 *  @FileName docusaurus.build.env.ts
 *  @CreateDate  周日  02/02/2025
 *  @Description 打包环境
 ****************************************************************************/

import { target_domain } from './env';

/**  构建值 TARGET_DOMAIN 为 com 时构建到 lmssee.com  */
const com: BuildEnv = {
  url: 'https://lmssee.com',
  copyright: 'com',
  favicon: '/icon/com/favicon.ico',
  logo: '/icon/com/logo.png',
  title: '左左和右右',
  baseUrl: '/',
};
/**  构建值  TARGET_DOMAIN 为  io 时 构建到 earthnutDev.github.io */
const io: BuildEnv = {
  baseUrl: '/',
  url: 'https://earthnutDev.github.io',
  copyright: 'io',
  favicon: '/icon/dev/favicon.ico',
  logo: '/icon/dev/logo.png',
  title: '花生亻',
};

/**
 *
 * 环境值
 *
 */
export const { title, url, copyright, favicon, logo, baseUrl } = {
  com,
  io,
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
