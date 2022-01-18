import * as React from 'react';

type Props = {
  style: React.CSSProperties;
};

const Publish = (props: Props) => {
  const { style } = props;

  return (
    <svg
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <title>public</title>
      <path d="M17.906 17.391q2.109-2.25 2.109-5.391 0-2.484-1.383-4.5t-3.633-2.906v0.422q0 0.797-0.609 1.383t-1.406 0.586h-1.969v2.016q0 0.422-0.305 0.703t-0.727 0.281h-1.969v2.016h6q0.422 0 0.703 0.281t0.281 0.703v3h0.984q1.406 0 1.922 1.406zM11.016 19.922v-1.922q-0.797 0-1.406-0.609t-0.609-1.406v-0.984l-4.781-4.781q-0.234 0.938-0.234 1.781 0 3.047 2.039 5.297t4.992 2.625zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z" />
    </svg>
  );
};

export default Publish;
