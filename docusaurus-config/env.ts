/**
 *
 * 打包的类型
 *
 * - cn
 * - io
 *
 */
const TARGET_DOMAIN = process.env.TARGET_DOMAIN;

/**
 * 构建环境
 */
export const target_domain = { com: 'com', io: 'io' }[TARGET_DOMAIN] ?? 'com';

/**  当前的环境执行  */
export const envelopment = /com/i.test(target_domain);
