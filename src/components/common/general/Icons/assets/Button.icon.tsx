import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const Button = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      width="17"
      height="17"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10.5" cy="10.5" r="10.5" fill="#C4C4C4" />
      <rect
        x="5.9"
        y="5.9"
        width="9.2"
        height="9.2"
        rx="1.1"
        stroke="white"
        strokeWidth="1.8"
      />
    </svg>
  );
};

export default Button;
