interface ObjectConstructor {
  setPrototypeOf<T, U>(o: T, proto: U): T & U;
}

declare module '*index.module.scss' {
  const classes: {
    [key: string]: string;
  };
  /** 页面，在弹窗口使用 */
  export default classes;
}
