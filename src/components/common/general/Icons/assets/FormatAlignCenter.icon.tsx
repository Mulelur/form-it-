import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const FormatAlignCenter = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      version="1.1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>format_align_center</title>
      <path d="M3 3h18v2.016h-18v-2.016zM6.984 6.984h10.031v2.016h-10.031v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 21v-2.016h18v2.016h-18zM6.984 15h10.031v2.016h-10.031v-2.016z" />
    </svg>
  );
};

export default FormatAlignCenter;
