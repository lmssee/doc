import type { Config as DefaultConfig } from '@docusaurus/types';

import { DocusaurusConfig as DefaultDocusaurusConfig } from '@docusaurus/types/src/config';
type CustomFileConfig = {
  customFields: {
    buildTime: string;
  };
};

type CustomConfig = DefaultConfig & CustomFileConfig;

type CustomDocusaurusConfig = DefaultDocusaurusConfig & CustomFileConfig;

declare module '@docusaurus/types/src/config' {
  export interface DocusaurusConfig extends CustomDocusaurusConfig {}
}

declare module '@docusaurus/types' {
  export interface Config extends CustomConfig {}
}
