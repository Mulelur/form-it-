import * as React from 'react';
import { GlobalStyles } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useStoreRehydrated } from 'easy-peasy';
import Routes from './routes/Routes';
// import BarLoader from "react-spinners/BarLoader";

export default function App() {
  const isRehydrated = useStoreRehydrated();

  return isRehydrated ? (
    <>
      <GlobalStyles styles={{ fontsize: '1.8rem' }} />
      <Helmet titleTemplate="%s - form-it" defaultTitle="form-it">
        <meta charSet="utf-8" />
        <link href="https://formit" rel="canonical" />
      </Helmet>
      <Routes />
    </>
  ) : (
    <div />
  );
}
