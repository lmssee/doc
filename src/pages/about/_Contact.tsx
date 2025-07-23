import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function Contact() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div>
      <hr />
      <div>{siteConfig.title}</div>
    </div>
  );
}
