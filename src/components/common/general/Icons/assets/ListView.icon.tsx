import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const ListView = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <title>view_headline</title>
      <path d="M3.984 5.016h16.031v1.969h-16.031v-1.969zM3.984 11.016v-2.016h16.031v2.016h-16.031zM3.984 18.984v-1.969h16.031v1.969h-16.031zM3.984 15v-2.016h16.031v2.016h-16.031z" />
    </svg>
  );
};

export default ListView;
