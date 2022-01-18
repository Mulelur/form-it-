// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/no-null */
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Menu, { MenuProps } from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Pages } from '../../../components';
import AddButton from '../../../components/common/buttons/AddButton';
import { InsertIcon } from '../../../components/layout/header/icons/headerIcons';
import { useActions } from '../../../store';

type Params = {
  projectId: string;
  pageId: string;
};

type Props = {
  project: any;
};

export default function PagesContainer(props: Props) {
  const { project } = props;
  const { projectId } = useParams<Params>();
  const history = useHistory();
  const goTo = (source: string) => {
    history.push(source);
  };

  const { addPage, select } = useActions((action) => action.Projects);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };
  const handleClose = () => {
    setContextMenu(null);
    setAnchorEl(null);
  };

  const StyledMenu = styled((menuProps: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...menuProps}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light'
          ? 'rgb(55, 65, 81)'
          : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0'
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5)
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          )
        }
      }
    }
  }));

  return (
    <Pages>
      <Pages.Header>
        <Pages.Title>Pages</Pages.Title>
        <AddButton
          onClick={() => {
            addPage(projectId);
          }}
        >
          <InsertIcon />
        </AddButton>
      </Pages.Header>
      <Pages.Body>
        {project &&
          project.pages.map((item: any) => {
            return (
              <Pages.Item
                onContextMenu={handleContextMenu}
                style={{ cursor: 'context-menu' }}
                key={item.id}
                onClick={() => {
                  select({ type: 'page', item });
                  goTo(`/project/${projectId}/${item.id}`);
                }}
              >
                {item.module}
                {/* <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="icon_ifsry2m"
                  >
                    <path
                      d="M 3 6.5 C 3.828 6.5 4.5 7.172 4.5 8 C 4.5 8.828 3.828 9.5 3 9.5 C 2.172 9.5 1.5 8.828 1.5 8 C 1.5 7.172 2.172 6.5 3 6.5 Z M 8 6.5 C 8.828 6.5 9.5 7.172 9.5 8 C 9.5 8.828 8.828 9.5 8 9.5 C 7.172 9.5 6.5 8.828 6.5 8 C 6.5 7.172 7.172 6.5 8 6.5 Z M 13 6.5 C 13.828 6.5 14.5 7.172 14.5 8 C 14.5 8.828 13.828 9.5 13 9.5 C 12.172 9.5 11.5 8.828 11.5 8 C 11.5 7.172 12.172 6.5 13 6.5 Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button> */}
              </Pages.Item>
            );
          })}
      </Pages.Body>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={contextMenu !== null}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </Pages>
  );
}
