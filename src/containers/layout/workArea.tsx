/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
// import { useSpring } from '@react-spring/web';
// import { useDrag } from '@use-gesture/react';
// import lodash from 'lodash-es';
// import deepdash from 'deepdash-es';

// Modile view 
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
//
import { WorkArea } from '../../components';
// import { InputField } from '../fields';
import { useGlobalState, useActions } from '../../store';
import { Page } from '../../Interface/project.interface';
import LineText from '../../components/fields/Elements/Text';
import inputField from '../../components/fields/Elements/inputField';
import MyButton from '../../components/fields/Elements/button';
import Icons from '../../components/common/general/Icons';

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }


const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

// const Deep = deepdash(lodash);

export default function WorkAreaContainer() {
  const { projects } = useGlobalState((state) => state.Projects);
  const { select } = useActions((action) => action.Projects);

  // const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  // const container = window !== undefined ? () => window().document.body : undefined;

  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  // const bind = useDrag(({ down, offset: [ox, oy] }) =>
  //   api.start({ x: ox, y: oy, immediate: down })
  // );

  // TODO Remove this page const
  const page: Page | undefined = projects[0]?.pages[0] || undefined;

  const renderChild = (child: any) => {
    let htmlEle: any;
    switch (child.type) {
      case 'input':
        htmlEle = <inputField.Input style={child.styles} value={child.value} />;
        break;
      case 'text':
        htmlEle = (
          <LineText.Text style={child.styles}>{child.value}</LineText.Text>
        );
        break;
      case 'label':
        htmlEle = (
          <inputField.Label style={child.styles}>
            {child.value}
          </inputField.Label>
        );
        break;
      case 'button':
        htmlEle = (
          <MyButton onClick={() => { }} style={child.styles}>
            {child.value}
          </MyButton>
        );
        break;
      default:
        return <div>{child.value}</div>;
    }
    return htmlEle;
  };

  // eslint-disable-next-line consistent-return
  const renderNode = (child: any) => {
    // eslint-disable-next-line consistent-return
    if (!child.children) {
      return renderChild(child);
    }
    return (
      <div style={child.styles}>
        {child.children.map((item: any) => renderNode(item))}
      </div>
    );
  };

  const drawerBleeding = 56;

  return (
    <WorkArea>
      <WorkArea.Bord style={page?.styles}>
        <div style={page?.styles}>
          {page &&
            page?.children?.map((item) => {
              return (
                <>
                  <WorkArea.Item
                    // key={ite}
                    style={item.styles}
                    onClick={() => {
                      select({ item, type: 'element' });
                    }}
                  >
                    {renderNode(item)}
                    <WorkArea.Group />
                  </WorkArea.Item>
                </>
              );
            })}
        </div>
      </WorkArea.Bord>
      <WorkArea.MobileNav>
        <BottomNavigation
          sx={{ width: 500 }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Insets"
            value="recents"
            icon={<Icons name="insert" />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<Icons name="text" />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<Icons name="button" />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Root>
          <CssBaseline />
          <Global
            styles={{
              '.MuiDrawer-root > .MuiPaper-root': {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: 'visible',
              },
            }}
          />
          <Box sx={{ textAlign: 'center', pt: 1 }}>
            <Button onClick={toggleDrawer(true)}>Open</Button>
          </Box>
          <SwipeableDrawer
            // container={container}
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <StyledBox
              sx={{
                position: 'absolute',
                top: -drawerBleeding,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: 'visible',
                right: 0,
                left: 0,
              }}
            >
              <Puller />
              <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
            </StyledBox>
            <StyledBox
              sx={{
                px: 2,
                pb: 2,
                height: '100%',
                overflow: 'auto',
              }}
            >
              <Skeleton variant="rectangular" height="100%" />
            </StyledBox>
          </SwipeableDrawer>
        </Root>
      </WorkArea.MobileNav>
    </WorkArea>
  );
}
