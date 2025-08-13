import { SidebarItemConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types.js';


export const sidebar_3_2: SidebarItemConfig = {
  type: 'category',
  label: 'express',
  collapsed: true,
  link : {
    type: 'doc',
    id: 'node/NodeJs/express/index'
  },   
  items: ['node/NodeJs/express/创建',
'node/NodeJs/express/静态文件',
'node/NodeJs/express/请求对象',
'node/NodeJs/express/响应对象',
'node/NodeJs/express/表单处理',
'node/NodeJs/express/cookie',
'node/NodeJs/express/会话 session',
'node/NodeJs/express/简单例子',
'node/NodeJs/express/中间件',
'node/NodeJs/express/发送邮件']
};
