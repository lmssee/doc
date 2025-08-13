import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
	import { sidebar_1_0 } from  './h-j-c/_sidebars';
	import { sidebar_1_1 } from  './node/_sidebars';
	import { sidebar_1_2 } from  './computer/_sidebars';
	import { sidebar_1_3 } from  './server/_sidebars';

const noteBookSidebars: SidebarsConfig = {
      nodeBookSidebars: ['index', sidebar_1_0,
sidebar_1_1,
sidebar_1_2,
sidebar_1_3]
};

export default noteBookSidebars;
