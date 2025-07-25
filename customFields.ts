import type { Config as DefaultConfig } from '@docusaurus/types';

import { DocusaurusConfig as DefaultDocusaurusConfig } from '@docusaurus/types/src/config';
export type CustomFileConfig = {
  customFields: {
    buildTime: string;
    envelopment: boolean;
  };
};

type _CustomConfig = DefaultConfig & CustomFileConfig;

type _CustomDocusaurusConfig = DefaultDocusaurusConfig & CustomFileConfig;

declare module '@docusaurus/types/src/config' {
  export type CustomDocusaurusConfig = _CustomDocusaurusConfig;
}

declare module '@docusaurus/types' {
  export type CustomConfig = _CustomConfig;
}
