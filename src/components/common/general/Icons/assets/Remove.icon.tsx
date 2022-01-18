import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const Remove = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
    >
      <title>remove</title>
      <path d="M18.984 12.984h-13.969v-1.969h13.969v1.969z" />
    </svg>
  );
};

export default Remove;
