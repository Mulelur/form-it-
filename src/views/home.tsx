import React from 'react';
import { Home } from '../components';
import HeaderContainer from '../containers/layout/header';
import WorkSpaceContainer from '../containers/layout/workSpace';
import HomeHBarContainer from '../containers/Home/HomeHBar';
import WelcomeContainer from '../containers/layout/welcome';
import { useGlobalState } from '../store';

export default function HomeContainer() {
  const { showTutorial } = useGlobalState((state) => state.Tutorial);
  const [loading, setLoading] = React.useState(false);
  return (
    <Home>
      {showTutorial && <Home.Overlay />}
      <HeaderContainer account />
      <Home.Row>
        {showTutorial && <WelcomeContainer />}
        <HomeHBarContainer
          setLoading={setLoading}
          loading={loading}
        />
        <WorkSpaceContainer />
      </Home.Row>
    </Home>
  );
}
