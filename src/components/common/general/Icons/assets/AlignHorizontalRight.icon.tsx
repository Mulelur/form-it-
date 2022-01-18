import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const AlignHorizontalRight = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <title>align_horizontal_right</title>
      <path d="M20.016 2.016h1.969v19.969h-1.969v-19.969zM2.016 9.984h15.984v-3h-15.984v3zM8.016 17.016h9.984v-3h-9.984v3z" />
    </svg>
  );
};

export default AlignHorizontalRight;
