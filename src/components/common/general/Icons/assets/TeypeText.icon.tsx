import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const Text = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_2)">
        <path
          d="M4 7V4H20V7"
          stroke="#D1C5C5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 20H15"
          stroke="#D1C5C5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 4V20"
          stroke="#D1C5C5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_2">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Text;
