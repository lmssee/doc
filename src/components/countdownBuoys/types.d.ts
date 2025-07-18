/****************************************************************************
 * @Author earthnut
 * @Email earthnut.dev@outlook.com
 * @ProjectName website
 * @FileName interface.ts
 * @CreateDate  周一  12/23/2024
 * @Description  倒计时浮标的类型
 ****************************************************************************/

export interface CountdownBuoysProps {
  /**
   * 倒计时终结时要去往的路由
   *
   * 缺省则跳转至 `/`
   **/
  url?: string;
  /**
   * 倒计时
   *
   * `缺省值为 3800` ，单位 `ms`
   **/
  delay?: number;
}
