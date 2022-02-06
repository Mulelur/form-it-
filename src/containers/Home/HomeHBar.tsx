import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { HierarchyBar } from '../../components';
import Icons from '../../components/common/general/Icons';
import { HomeData } from '../../fixtures/Fixtures';
import { useActions, useGlobalState } from '../../store';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

type Params = {
  workSpace: string;
};

export default function HomeHBarContainer(props: Props) {
  const { loading, setLoading } = props;
  const { workSpace } = useParams<Params>();
  const [state, setState] = React.useState({
    left: false,
    right: false
  });

  const { state: myState } = useGlobalState((State) => State.FormIt);
  const { setToggleDrawer } = useActions((action => action.FormIt));

  const history = useHistory();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
        setToggleDrawer(false);

      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <HierarchyBar.Header>
        <HierarchyBar.Title>WorkSpace</HierarchyBar.Title>
      </HierarchyBar.Header>
      <HierarchyBar.Body>
        {HomeData.map((item) => {
          return (
            <Tooltip key={item.id} title={item.title}>
              <HierarchyBar.Row
                onClick={() => {
                  setLoading(loading);
                  history.push(`/${item.title.toLowerCase()}`);
                }}
              >
                <HierarchyBar.IconWrapper>{item.icon}</HierarchyBar.IconWrapper>
                <HierarchyBar.Component>{item.title}</HierarchyBar.Component>
              </HierarchyBar.Row>
            </Tooltip>
          );
        })}
        <HierarchyBar.HelpIconWrapper>
          <Icons name="help" />
        </HierarchyBar.HelpIconWrapper>
      </HierarchyBar.Body>
    </Box>
  );

  // eslint-disable-next-line no-console

  const anchor = 'left';

  return (
    <>
      <HierarchyBar
        style={{ height: 'calc(100vh - 11rem)' }}
        flexDirection="column"
        width="30rem"
      >
        <HierarchyBar.Header>
          <HierarchyBar.Title>WorkSpace</HierarchyBar.Title>
        </HierarchyBar.Header>
        <HierarchyBar.Body>
          {HomeData.map((item) => {
            return (
              <Tooltip key={item.id} title={item.title}>
                <HierarchyBar.Row
                  selected={workSpace === item.title.toLowerCase()}
                  onClick={() => {
                    setLoading(loading);
                    history.push(`/${item.title.toLowerCase()}`);
                  }}
                >
                  <HierarchyBar.IconWrapper>
                    {item.icon}
                  </HierarchyBar.IconWrapper>
                  <HierarchyBar.Component>{item.title}</HierarchyBar.Component>
                </HierarchyBar.Row>
              </Tooltip>
            );
          })}
          <HierarchyBar.HelpIconWrapper>
            <Icons name="help" />
          </HierarchyBar.HelpIconWrapper>
        </HierarchyBar.Body>
        <SwipeableDrawer
          anchor={anchor}
          open={myState}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, myState)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </HierarchyBar>
    </>
  );
}
