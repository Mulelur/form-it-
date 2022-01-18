import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const Help = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      width="8"
      height="12"
      viewBox="0 0 8 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd">
        <path
          d="M0 5h2v.088H0V5zm0-1.25C0 1.494 1.626 0 4 0c2.377 0 4 1.488 4 3.75 0 1.462-.636 2.323-1.885 3.164l-.44.29c-.33.221-.482.355-.54.455C5.068 7.774 4.999 8.25 5 9l-2 .003c-.002-1.083.108-1.835.405-2.347.255-.439.59-.732 1.158-1.113l.435-.287C5.75 4.748 6 4.41 6 3.75 6 2.633 5.309 2 4 2c-1.305 0-2 .638-2 1.75v1.338H0V3.75z"
          fillRule="nonzero"
        />
        <path d="M3 10h2v2H3z" />
      </g>
    </svg>
  );
};

export default Help;
