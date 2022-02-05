// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { LinkProps } from 'react-router-dom';
import * as WS from './styles/workSpace.styles';

const defaultProps = {
  children: undefined
};

type Props = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
  src?: string;
  placeholder?: string;
  image?: string;
};

export default function WorkSpace(props: Props) {
  const { children = defaultProps.children } = props;
  return <WS.Container>{children}</WS.Container>;
}

WorkSpace.Header = function WorkSpaceHeader(props: Props) {
  return <WS.Header>{props.children}</WS.Header>;
};

WorkSpace.Projects = function WorkSpaceProjects(props: Props) {
  return <WS.Projects>{props.children}</WS.Projects>;
};

WorkSpace.ProjectDescriptionText = function WorkSpaceProjectDescriptionText(
  props: Props
) {
  return (
    <WS.ProjectDescriptionText>{props.children}</WS.ProjectDescriptionText>
  );
};

WorkSpace.ProjectListHeader = function WorkSpaceProjectListHeader(
  props: Props
) {
  return <WS.ProjectListHeader>{props.children}</WS.ProjectListHeader>;
};

WorkSpace.Search = function WorkSpaceSearch(props: Props) {
  return <WS.Search>{props.children}</WS.Search>;
};

WorkSpace.SortMenu = function WorkSpaceSortMenu(props: Props) {
  return <WS.SortMenu>{props.children}</WS.SortMenu>;
};

WorkSpace.Project = function WorkSpaceProject(props: Props) {
  const { onClick, style, children } = props;
  return <WS.Project onClick={onClick} style={style}>{children}</WS.Project>;
};

WorkSpace.ProjectThumbnail = function WorkSpaceProjectThumbnail(
  props: LinkProps
) {
  const { children, to } = props;
  return <WS.ProjectThumbnail to={to}>{children}</WS.ProjectThumbnail>;
};

WorkSpace.ProjectInfo = function WorkSpaceProjectInfo(props: Props) {
  return <WS.ProjectInfo>{props.children}</WS.ProjectInfo>;
};

WorkSpace.ProjectTitle = function WorkSpaceProjectTitle(props: LinkProps) {
  return <WS.ProjectTitle to={props.to}>{props.children}</WS.ProjectTitle>;
};

WorkSpace.ProjectDescription = function WorkSpaceProjectDescription(
  props: Props
) {
  return <WS.ProjectDescription>{props.children}</WS.ProjectDescription>;
};

WorkSpace.Menu = function WorkSpaceMenu(props: Props) {
  return <WS.Menu>{props.children}</WS.Menu>;
};

WorkSpace.MenuList = function WorkSpaceMenuList(props: Props) {
  return <WS.MenuList>{props.children}</WS.MenuList>;
};

WorkSpace.MenuListItem = function WorkSpaceMenuListItem(props: Props) {
  return <WS.MenuListItem>{props.children}</WS.MenuListItem>;
};

WorkSpace.HeaderTitle = function WorkSpaceHeaderTitle(props: Props) {
  return <WS.HeaderTitle>{props.children}</WS.HeaderTitle>;
};

WorkSpace.SearchInput = function WorkSpaceSearchInput(props: Props) {
  return <WS.SearchInput placeholder={props.placeholder} />;
};

WorkSpace.IconWarper = function WorkSpaceIconWarper(props: Props) {
  return <WS.IconWarper>{props.children}</WS.IconWarper>;
};

WorkSpace.Image = function WorkSpaceImage(props: Props) {
  return <WS.Image src={props.src} />;
};

WorkSpace.Row = function WorkSpaceRow(props: Props) {
  return <WS.Row>{props.children}</WS.Row>;
};

WorkSpace.Box = function WorkSpaceBox(props: Props) {
  return <WS.Box>{props.children}</WS.Box>;
};

WorkSpace.ViewIconWarper = function WorkSpaceViewIconWarper(props: Props) {
  const { children, onClick } = props;
  return <WS.ViewIconWarper onClick={onClick}>{children}</WS.ViewIconWarper>;
};

WorkSpace.ProjectHeaderTitle = function WorkSpaceProjectHeaderTitle(
  props: Props
) {
  return <WS.ProjectHeaderTitle>{props.children}</WS.ProjectHeaderTitle>;
};

WorkSpace.MenuWarper = function WorkSpaceMenuWarper(props: Props) {
  return <WS.MenuWarper>{props.children}</WS.MenuWarper>;
};

WorkSpace.Videos = function WorkSpaceVideos(props: Props) {
  return <WS.Videos>{props.children}</WS.Videos>;
};

WorkSpace.Video = function WorkSpaceVideo(props: Props) {
  const { children, image } = props;
  return (
    <WS.Video style={{ backgroundImage: `url(${image})` }}>{children}</WS.Video>
  );
};


WorkSpace.VideoGrid = function WorkSpaceVideoGrid(props: Props) {
  const { children, image } = props;
  return (
    <WS.VideoGrid style={{ backgroundImage: `url(${image})` }}>{children}</WS.VideoGrid>
  );
};


WorkSpace.VideoIconWaper = function WorkSpaceVideoIconWaper(props: Props) {
  return <WS.VideoIconWaper>{props.children}</WS.VideoIconWaper>;
};

WorkSpace.Scroll = function WorkSpaceScroll(props: Props) {
  return <WS.Scroll>{props.children}</WS.Scroll>;
};

WorkSpace.List = function WorkSpaceList(props: Props) {
  return <WS.List>{props.children}</WS.List>;
};

WorkSpace.ListItem = function WorkSpaceListItem(props: Props) {
  return <WS.ListItem>{props.children}</WS.ListItem>;
};

WorkSpace.GridView = function WorkSpaceGridView(props: Props) {
  return <WS.GridView>{props.children}</WS.GridView>;
};

WorkSpace.ListView = function WorkSpaceListView(props: Props) {
  return <WS.ListView>{props.children}</WS.ListView>;
};

WorkSpace.ListText = function WorkSpaceListText(props: Props) {
  return <WS.ListText>{props.children}</WS.ListText>;
};

WorkSpace.ListHeading = function WorkSpaceListHeading(props: Props) {
  return <WS.ListHeading>{props.children}</WS.ListHeading>;
};

WorkSpace.Diteils = function WorkSpaceDiteils(props: Props) {
  return <WS.Diteils>{props.children}</WS.Diteils>;
};


WorkSpace.defaultProps = {};
