import * as React from 'react';
// import Lottie from "react-lottie";
import { Link } from 'react-router-dom';

// Styles
import './NotFound.scss';

export default function NotFound() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   // animationData: ,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // };

  return (
    <div className="page-not-found">
      <div className="animation-container">
        {/* <Lottie height={400} options={defaultOptions} width={800} /> */}
        <div className="button">
          <Link className="btn button-home" to="/">
            Abort
          </Link>
        </div>
      </div>
    </div>
  );
}
