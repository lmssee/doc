# 网站

该网站是由 [Docusaurus](https://docusaurus.io/) 技术支持, 一个牛逼的静态网站生成器

## 官带构建过程

```bash
# 安装构建, 可直接 --typescript 以使用 typescript
npx create-docusaurus@latest [application name] classic
# 本地开发
cd [application name] && npm start
# 打包构建，该构建体可直接静态托管
npm run build
# 部署

```

### Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
