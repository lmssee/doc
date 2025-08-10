import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const edgeExtensionSidebars: SidebarsConfig = {
  edgeExtensionSidebar: [
    'index',
    'reset-new-tab/index',
    'simple-refresh/index',
    {
      type: 'link',
      label: 'edge 扩展页',
      href: 'https://microsoftedge.microsoft.com/addons/search?developer=earthnut',
    },
  ],
};

export default edgeExtensionSidebars;
