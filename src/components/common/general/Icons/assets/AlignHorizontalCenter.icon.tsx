import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const AlignHorizontalCenter = (props: Props) => {
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
      <title>align_horizontal_center</title>
      <path d="M11.016 2.016h1.969v4.969h8.016v3h-8.016v4.031h5.016v3h-5.016v4.969h-1.969v-4.969h-5.016v-3h5.016v-4.031h-8.016v-3h8.016v-4.969z" />
    </svg>
  );
};

export default AlignHorizontalCenter;
