// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useHistory, useParams } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Layers, Panel } from '../../../components';
import Icons from '../../../components/common/general/Icons';
import {
  Component,
  Group
  // HTMLElement
} from '../../../Interface/project.interface';
import { useActions } from '../../../store';
import { Groups } from '../../../fixtures/groups';

type Props = {
  page: any;
  htmlElement: any;
  group: any;
};

type Params = {
  projectId: string;
  pageId: string;
  groupId: string;
};

export default function LayersContainer(props: Props) {
  const { page, group } = props;
  // eslint-disable-next-line unicorn/no-null
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const [targetIndex, setTargetIndex] = React.useState(0);
  const [selectedGroup, setSelectedGroup] = React.useState<Group | Component>(
    group
  );
  const { select, addChild, editChild } = useActions((action) => action.Projects);
  const { projectId, pageId } = useParams<Params>();

  const open = Boolean(anchorEl);
  const handleAddClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (
    parentId?: string | undefined,
    child?: any,
    type?: string
  ) => {
    // eslint-disable-next-line unicorn/no-null
    setAnchorEl(null);
    addChild({
      parentId,
      child,
      type
    });
  };

  const history = useHistory();

  const info: any = [];

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    item: Group | Component
  ) => {
    setSelectedGroup(item);
    select({ type: 'element', item });
    switch (event.detail) {
      case 1:
        select({ type: 'group', item });
        info.push({ groupId: item.id });
        history.push({
          pathname: `/project/${projectId}/${pageId}`,
          search: Object.keys({ groupId: item.id })
            .map((value) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              return `${value}=${{ groupId: item.id }[value]}`;
            })
            .join('&')
        });
        break;
      case 2:
        editChild({
          parentId: item.id,
          type: 'editebule',
          value: item.editebule
        });
        break;
      default:
        break;
    }
  };

  const handleHTMLElementClick = (item: HTMLElement) => {
    select({ type: 'htmlElement', item });

    info.push({ htmlElementId: item.id });
    history.push({
      pathname: `/project/${projectId}/${pageId}`,
      search: Object.keys({ htmlElementId: item.id })
        .map((value) => {
          return `${value}=${{ htmlElementId: item.id }[value]}`;
        })
        .join('&')
    });
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
      {...menuProps}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      fontSize: '1.8rem',
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
        fontSize: '16px',
        textTransform: 'capitalize',
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

  // eslint-disable-next-line consistent-return
  const renderChildren = (item: any) => {
    return (
      <>
        <Draggable draggableId="draggable-1" index={0} key={item.id}>
          {(provided) => (
            <div ref={provided.innerRef}>
              {item.editebule ? <Layers.ChildItemInput
                onClick={() => handleHTMLElementClick(item)}
                value={item.value || item.module}
              /> :
                <Layers.ChildItem
                  onClick={() => handleHTMLElementClick(item)}
                >
                  {item.value || item.module}
                </Layers.ChildItem>
              }
            </div>
          )}
        </Draggable>
      </>
    );
  };

  const renderNode = (child: any) => {
    // eslint-disable-next-line consistent-return
    if (!child.children) {
      return renderChildren(child);
    }
    return (
      <Droppable droppableId="droppable-1" type="PERSON" key={child.id}>
        {(provided) => (
          <div ref={provided.innerRef}>
            <Layers.Component onClick={() => setSelectedGroup(child)}>
              <Layers.ParentItem
                onClick={(event) => handleClick(event, child)}
                key={child.id}
                value={child.module}
                selected={selectedGroup?.id === child.id}
              />
              <Layers.AddIcon
                // id="demo-customized-button"
                aria-controls="demo-customized-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleAddClick}
                selected={selectedGroup?.id === child.id}
              >
                <Icons name="add" />
              </Layers.AddIcon>
              {child.children.map((item: any) => renderNode(item))}
              <div>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button'
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => handleClose()}
                >
                  {Groups.map((el) => {
                    return (
                      <MenuItem
                        key={el.id}
                        onClick={() => handleClose(child.id, el, 'group')}
                        disableRipple
                      >
                        <Icons name={el.module} />
                        {el.module}
                      </MenuItem>
                    );
                  })}
                </StyledMenu>
              </div>
            </Layers.Component>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };

  // const onDragStart = React.useCallback(() => {
  //   /*...*/
  // }, []);

  const onDragEnd = React.useCallback(() => {
    // the only one that is required
    // const A = '';
    // const x = idx;
    // const y = targetIndex;
    // A[+x] = A.splice(y, 1, A[+x])[0];
  }, []);

  return (
    <Layers>
      <Layers.Header>
        <Layers.Title>Elements</Layers.Title>
      </Layers.Header>

      <Layers.Body style={{ height: '28rem' }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {page &&
            page?.children?.map((item: Group) => {
              return renderNode(item);
            })}
        </DragDropContext>
      </Layers.Body>
      <Layers.Header>
        <Layers.Title>Components</Layers.Title>
      </Layers.Header>
      <Layers.Body
        style={{
          overflow: 'hidden'
        }}
      >
        <Panel>
          <Panel.Grid>
            <Panel.ElementButtons
            //   onClick={() =>
            //     addChild({
            //       parentId: pageId,
            //       child: item,
            //       type: 'group'
            //     })
            //   }
            >
              <Icons name="text" />
              Paragraph
            </Panel.ElementButtons>
            <Panel.ElementButtons
            //   onClick={() =>
            //     addChild({
            //       parentId: pageId,
            //       child: item,
            //       type: 'group'
            //     })
            //   }
            >
              <Icons name="checkbox" />
              Checkbox
            </Panel.ElementButtons>
            <Panel.ElementButtons
            //   onClick={() =>
            //     addChild({
            //       parentId: pageId,
            //       child: item,
            //       type: 'group'
            //     })
            //   }
            >
              <Icons name="image" />
              Image
            </Panel.ElementButtons>
            <Panel.ElementButtons
            //   onClick={() =>
            //     addChild({
            //       parentId: pageId,
            //       child: item,
            //       type: 'group'
            //     })
            //   }
            >
              <Icons name="radiobutton" />
              RadioButton
            </Panel.ElementButtons>
          </Panel.Grid>
        </Panel>
      </Layers.Body>
    </Layers>
  );
}
