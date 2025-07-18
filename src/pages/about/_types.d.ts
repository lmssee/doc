export type footerList = {
  /**
   * 将要跳转的地址
   **/
  href: string;
  /**
   * 图片路径展示的地址
   *
   * 还将作为 `text` 的缺省数据
   **/
  src: string;
  /**
   * 鼠标悬停展示的 title
   *
   * 缺省时展示为 `earthnut`
   **/
  title?: string;
  /**
   * 展示的文本信息
   *
   * 省略时以 `src` 值显示
   **/
  text?: string;
}[];
