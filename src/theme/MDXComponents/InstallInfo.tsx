import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

/**    */
export function InstallInfo({ name, dev }: { name: string; dev?: boolean }) {
  return (
    <>
      <Tabs groupId="npm-install-of-pkg-manager">
        <TabItem value="npm" label="npm" default>
          <CodeBlock language="bash">{`npm install  ${name} --save${dev ? '-dev' : ''}`}</CodeBlock>
        </TabItem>
        <TabItem value="yarn" label="yarn">
          <CodeBlock language="bash">{`yarn add ${name} ${dev ? '--dev' : ''}`}</CodeBlock>
        </TabItem>
        <TabItem value="pnpm" label="pnpm">
          <CodeBlock language="bash">{`pnpm add ${name} --save${dev ? '-dev' : ''}`}</CodeBlock>
        </TabItem>
      </Tabs>
    </>
  );
}
