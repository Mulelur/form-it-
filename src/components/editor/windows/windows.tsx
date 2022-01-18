import React from 'react';
import * as WIN from './styles/Windows.styles';

type Props = {
  children: React.ReactNode;
};

export default function Window(props: Props) {
  const { children } = props;
  return <WIN.Container>{children}</WIN.Container>;
}

Window.WindowBarCursor = function WindowWindowBarCursor(props: Props) {
  const { children } = props;
  return <WIN.WindowBarCursor>{children}</WIN.WindowBarCursor>;
};

Window.NavigationBar = function WindowNavigationBar(props: Props) {
  const { children } = props;
  return <WIN.NavigationBar>{children}</WIN.NavigationBar>;
};

Window.NavigationBarAction = function WindowNavigationBarAction(props: Props) {
  const { children } = props;
  return <WIN.NavigationBarAction>{children}</WIN.NavigationBarAction>;
};

Window.StackContainer = function WindowStackContainer(props: Props) {
  const { children } = props;
  return <WIN.StackContainer>{children}</WIN.StackContainer>;
};

Window.NavigationContent = function WindowNavigationContent(props: Props) {
  const { children } = props;
  return <WIN.NavigationContent>{children}</WIN.NavigationContent>;
};

Window.Stack = function WindowStack(props: Props) {
  const { children } = props;
  return <WIN.Stack>{children}</WIN.Stack>;
};

Window.Title = function WindowTitle(props: Props) {
  const { children } = props;
  return <WIN.Title>{children}</WIN.Title>;
};

Window.ImagePreview = function WindowImagePreview(props: Props) {
  const { children } = props;
  return <WIN.ImagePreview>{children}</WIN.ImagePreview>;
};

Window.Tab = function WindowTab(props: Props) {
  const { children } = props;
  return <WIN.Tab>{children}</WIN.Tab>;
};

Window.SearchWaper = function WindowTab(props: Props) {
  const { children } = props;
  return <WIN.SearchWaper>{children}</WIN.SearchWaper>;
};

Window.Search = function WindowTab() {
  return <WIN.Search />;
};
