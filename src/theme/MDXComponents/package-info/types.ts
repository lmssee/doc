/**
 *
 * package info props
 *
 */
export interface PackageInfoProps {
  /**  包名  */
  packageName?: string;
  /**  github 用户名  */
  githubUserName?: string;
  /**  github 仓库名  */
  githubRepoName?: string;
  /**  github 分支名，缺省值为 main  */
  githubBranchName?: string;
}

/**
 *
 *
 *
 */
export interface InfoType {
  /**  图片地址  */
  src: string;
  /**  图标 alt  */
  alt: string;
  /**  连接导航  */
  href?: string;
}
