interface MetaProps {
    title: string,
    description: string,
    keywords: string[]
}

const Meta: React.FC<MetaProps> = ({title, description, keywords}) => {
  return (
    <>
      <meta name="title" content={title} />
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords.join(', ')}
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Yonathan Cahyadi" />
    </>
  );
};

export default Meta;
