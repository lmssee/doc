import { createSidebarsConfig } from '../docusaurus-config/sidebars.config';

export default createSidebarsConfig({
  items: [
    'index',
    'reset-new-tab/index',
    'simple-refresh/index',
    {
      type: 'link',
      label: 'edge 扩展页',
      href: 'https://microsoftedge.microsoft.com/addons/search?developer=earthnut',
    },
  ],
});
