export interface HomeRippleButtonProps {
  /**  当前是否是激活状态  */
  isActive: boolean;

  /**  当前是否是抽离状态  */
  isDeactivating: boolean;
  /**  文本  */
  label: string;
  /**  当点击时  */
  onClick(): void;
}
