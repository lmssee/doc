/**
 *
 * 打包的类型
 *
 * - com
 * - comEarthnut
 * - cn
 * - cnEarthnut
 * - io
 *
 */
const TARGET_DOMAIN = process.env.TARGET_DOMAIN;
/**
 * 构建环境
 */
export const target_domain = [
  'com',
  'comEarthnut',
  'cn',
  'cnEarthnut',
  'lmssee',
  'earthnutDev',
].includes(TARGET_DOMAIN)
  ? TARGET_DOMAIN
  : 'earthnutDev';

/**  当前的环境执行  */
export const envelopment = /earthnut/i.test(target_domain);
