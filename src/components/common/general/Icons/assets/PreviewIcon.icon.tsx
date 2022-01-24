import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const PreviewIcon = (props: Props) => {
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
      <title>preview</title>
      <path d="M12 9q1.219 0 2.109 0.891t0.891 2.109-0.891 2.109-2.109 0.891-2.109-0.891-0.891-2.109 0.891-2.109 2.109-0.891zM12 17.016q2.063 0 3.539-1.477t1.477-3.539-1.477-3.539-3.539-1.477-3.539 1.477-1.477 3.539 1.477 3.539 3.539 1.477zM12 4.5q3.703 0 6.703 2.063t4.313 5.438q-1.313 3.375-4.313 5.438t-6.703 2.063-6.703-2.063-4.313-5.438q1.313-3.375 4.313-5.438t6.703-2.063z" />
    </svg>
  );
};

export default PreviewIcon;