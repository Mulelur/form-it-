import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const GridView = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
    >
      <title>grid_view</title>
      <path d="M18.984 18.984v-3.984h-3.984v3.984h3.984zM12.984 12.984h8.016v8.016h-8.016v-8.016zM18.984 9v-3.984h-3.984v3.984h3.984zM12.984 3h8.016v8.016h-8.016v-8.016zM9 18.984v-3.984h-3.984v3.984h3.984zM3 12.984h8.016v8.016h-8.016v-8.016zM9 9v-3.984h-3.984v3.984h3.984zM3 3h8.016v8.016h-8.016v-8.016z" />
    </svg>
  );
};

export default GridView;
