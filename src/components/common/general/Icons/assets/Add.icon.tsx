import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const Add = (props: Props) => {
  const { style } = props;

  return (
    <>
      <svg
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
      >
        <path
          d="M 6 1 C 6 0.448 6.448 0 7 0 C 7.552 0 8 0.448 8 1 L 8 6 L 13 6 C 13.552 6 14 6.448 14 7 C 14 7.552 13.552 8 13 8 L 8 8 L 8 13 C 8 13.552 7.552 14 7 14 C 6.448 14 6 13.552 6 13 L 6 8 L 1 8 C 0.448 8 0 7.552 0 7 C 0 6.448 0.448 6 1 6 L 6 6 Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
};

export default Add;
