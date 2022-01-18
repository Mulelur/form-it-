import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const Clear = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
    >
      <title>clear</title>
      <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z" />
    </svg>
  );
};

export default Clear;
