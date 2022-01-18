import React from 'react';

export function TickerUpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4">
      <path
        d="M 5.4 3.2 C 5.647 3.53 5.412 4 5 4 L 1 4 C 0.588 4 0.353 3.53 0.6 3.2 L 2.6 0.533 C 2.8 0.267 3.2 0.267 3.4 0.533 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TickerDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4">
      <path
        d="M 5.4 0.8 C 5.647 0.47 5.412 0 5 0 L 1 0 C 0.588 0 0.353 0.47 0.6 0.8 L 2.6 3.467 C 2.8 3.733 3.2 3.733 3.4 3.467 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PadLock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14">
      <path
        d="M 0 7 L 8 7 L 8 10 C 8 11.105 7.105 12 6 12 L 2 12 C 0.895 12 0 11.105 0 10 Z"
        fill="currentColor"
        className="lockPath_lzsjdah"
      />
      <path
        d="M 0.75 10 C 0.75 10 0.75 6.897 0.75 6 C 0.75 4.205 2.205 2.75 4 2.75 C 5.795 2.75 7.25 4.205 7.25 6 C 7.25 6.897 7.25 7 7.25 7"
        fill="transparent"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
        className="lockPath_lzsjdah translateUp_tqhwdgo"
        strokeDasharray="15.211931228637695"
        strokeDashoffset="4"
      />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '12px', height: '12px' }}
    >
      <path
        d="M 1.5 6.5 L 6.5 1.5"
        fill="transparent"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M 6.5 6.5 L 1.5 1.5"
        fill="transparent"
        strokeWidth="1.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
