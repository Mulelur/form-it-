import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const Radio = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="-4 -4 8 8"
    >
      <circle r="3" fill="#fff" />
    </svg>
  );
};

export default Radio;
