// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-null */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useHistory, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Header } from '../../components';
import Icons from '../../components/common/general/Icons';
import { InsertIcon } from '../../components/layout/header/icons/headerIcons';
import InsertContainer from '../insert/insert';
import Button from '../../components/common/buttons/PrimaryButton';
import img from '../../assets/images/img-3.png';
import { useActions } from '../../store';

type Params = {
  projectId: string;
  pageId: string;
};

type Props = {
  toolbar?: boolean;
  account?: boolean;
  setToggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function HeaderContainer(props: Props) {
  const { toolbar, account, setToggleDrawer } = props;

  // const history = useHistory();
  // history.location.pathname;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openInsert, setOpenInsert] = React.useState(false);
  const open = Boolean(anchorEl);
  const { projectId, pageId } = useParams<Params>();

  const { addProject } = useActions(
    (action) => action.Projects
  );

  const handleCreateProject = () => {
    addProject({
      projectName: 'tondis-project',
      author: 'rotonda',
      thumbnail: img,
      pages: [],
      viewed: moment().format('do'),
      edited: moment().format('do')
    });
  };

  const handleOpenInsertClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenInsert(!openInsert);
    setAnchorEl(event.currentTarget);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();

  return (
    <Header>
      <Header.NavMenu
        onClick={() => {
          setToggleDrawer(true);
        }}
      >
        <Header.MenuButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              d="M 1 0 L 11 0 C 11.552 0 12 0.448 12 1 C 12 1.552 11.552 2 11 2 L 1 2 C 0.448 2 0 1.552 0 1 C 0 0.448 0.448 0 1 0 Z M 1 5 L 11 5 C 11.552 5 12 5.448 12 6 C 12 6.552 11.552 7 11 7 L 1 7 C 0.448 7 0 6.552 0 6 C 0 5.448 0.448 5 1 5 Z M 1 10 L 11 10 C 11.552 10 12 10.448 12 11 C 12 11.552 11.552 12 11 12 L 1 12 C 0.448 12 0 11.552 0 11 C 0 10.448 0.448 10 1 10 Z"
              fill="currentColor"
            />
          </svg>
        </Header.MenuButton>
        <Header.NavMenuTitle>My New Form</Header.NavMenuTitle>
      </Header.NavMenu>
      {toolbar && (
        <Header.ToolBar>
          <Header.Tool
            aria-controls="demo-customized-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={(event) => {
              handleClick(event);
            }}
          >
            <Header.ToolIcon>
              <InsertIcon />
            </Header.ToolIcon>
            <Header.ToolTitle>Insert</Header.ToolTitle>
          </Header.Tool>
          <Header.Tool
            onClick={(event) => {
              handleOpenInsertClick(event);
            }}
          // onClick={(e) => {
          //   dispatch({ type: "addText", payload: state.active });
          // }}
          >
            <Header.ToolIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                <path
                  d="M 0 3 C 0 1.343 1.343 0 3 0 L 11 0 C 12.657 0 14 1.343 14 3 L 14 11 C 14 12.657 12.657 14 11 14 L 3 14 C 1.343 14 0 12.657 0 11 Z M 3 4 C 3 4.552 3.448 5 4 5 L 6 5 L 6 10 C 6 10.552 6.448 11 7 11 C 7.552 11 8 10.552 8 10 L 8 5 L 10 5 C 10.552 5 11 4.552 11 4 C 11 3.448 10.552 3 10 3 L 4 3 C 3.448 3 3 3.448 3 4 Z"
                  fill="currentColor"
                />
              </svg>
            </Header.ToolIcon>
            <Header.ToolTitle>Text</Header.ToolTitle>
          </Header.Tool>
          <Header.Tool>
            {/* <Header.ToolIcon /> */}
            <Icons name="button" />
            <Header.ToolTitle>Button</Header.ToolTitle>
          </Header.Tool>
        </Header.ToolBar>
      )}

      <Header.PnP>
        {account ? (
          <>
            <Button onClick={() => {
              handleCreateProject();
              // eslint-disable-next-line no-console
              console.log('add project');
            }
            } size='small' type='button' color='secondary' >
              <Icons name='add' />
              Create roject
            </Button>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                  <Avatar sx={{ width: 32, height: 32 }}>R</Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem
                onClick={() => {
                  history.push(`/settings/profile`);
                }}
              >
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => {
                  history.push(`/settings/account-settings`);
                }}
              >
                <ListItemIcon>
                  <Settings fontSize="medium" />
                </ListItemIcon>
                Account Settings
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push(`/settings/notifications`);
                }}
              >
                <ListItemIcon>
                  <NotificationsIcon fontSize="medium" />
                </ListItemIcon>
                Notification
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="medium" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Header.PnPButton>save</Header.PnPButton>
            <Header.PnPIconWapper
              onClick={() => {
                history.push(`/preview/${projectId}/${pageId}`);
              }}
            >
              <Header.PnPIcon>
                <Icons name="preview" />
              </Header.PnPIcon>
            </Header.PnPIconWapper>
            <Header.PnPButton>Publish</Header.PnPButton>
          </>
        )}
      </Header.PnP>
      <InsertContainer open={openInsert} onClose={handleClose} />
    </Header>
  );
}

HeaderContainer.defaultProps = {
  account: false,
  toolbar: false
};
