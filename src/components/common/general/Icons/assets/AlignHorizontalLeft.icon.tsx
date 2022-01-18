import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const AlignHorizontalLeft = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      fill="currentColor"
      height="14"
      viewBox="0 0 24 24"
    >
      <title>align_horizontal_left</title>
      <path d="M3.984 21.984h-1.969v-19.969h1.969v19.969zM21.984 6.984h-15.984v3h15.984v-3zM15.984 14.016h-9.984v3h9.984v-3z" />
    </svg>
  );
};

export default AlignHorizontalLeft;
