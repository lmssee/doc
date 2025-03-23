/****************************************************************************
 * @Author lmssee
 * @Email lmssee@outlook.com
 * @ProjectName website
 * @FileName directedTo.ts
 * @CreateDate  周五  12/20/2024
 * @Description 页面跳转
 ****************************************************************************/

/**************************
 * 将外站包裹入跳转中继页面
 **************************/
export default function directedToURL(str: string) {
  return `https://lmssee.com/redirectedPage?url=${encodeURIComponent(str)}`;
}
