/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import * as STT from './styles/Settings.styles';

type Props = {
  children?: React.ReactNode;
  image?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  direction?: 'top' | 'left' | 'right' | 'bottom';
  style?: React.CSSProperties;
};

export default function Settings(props: Props) {
  const { children } = props;
  return <STT.Container>{children}</STT.Container>;
}

Settings.NavHeading = function SettingsHeading(props: Props) {
  const { children } = props;
  return <STT.NavHeading>{children}</STT.NavHeading>;
};

Settings.Nav = function SettingsNav(props: Props) {
  const { children } = props;
  return <STT.Nav>{children}</STT.Nav>;
};

Settings.Row = function SettingsRow(props: Props) {
  const { children } = props;
  return <STT.Row>{children}</STT.Row>;
};

Settings.Col = function SettingsCol(props: Props) {
  const { children } = props;
  return <STT.Col>{children}</STT.Col>;
};

Settings.NavLink = function SettingsNav(props: Props) {
  const { children } = props;
  return <STT.NavLink>{children}</STT.NavLink>;
};

Settings.NavList = function SettingsNavList(props: Props) {
  const { children } = props;
  return <STT.NavList>{children}</STT.NavList>;
};

Settings.NavListItem = function SettingsNavListItem(props: Props) {
  const { children, onClick } = props;
  return <STT.NavListItem onClick={onClick}>{children}</STT.NavListItem>;
};

Settings.List = function SettingsList(props: Props) {
  const { children } = props;
  return <STT.List>{children}</STT.List>;
};

Settings.ListItem = function SettingsListItem(props: Props) {
  const { children, onClick } = props;
  return <STT.ListItem onClick={onClick}>{children}</STT.ListItem>;
};

Settings.Profile = function SettingsProfile(props: Props) {
  const { children } = props;
  return <STT.Profile>{children}</STT.Profile>;
};

Settings.ProfileImage = function SettingsProfileImage(props: Props) {
  const { image } = props;
  return <STT.ProfileImage style={{ backgroundImage: `url(${image})` }} />;
};

Settings.Title = function SettingsTitle(props: Props) {
  const { children } = props;
  return <STT.Title>{children}</STT.Title>;
};

Settings.TitleSub = function SettingsTitleSub(props: Props) {
  const { children } = props;
  return <STT.TitleSub>{children}</STT.TitleSub>;
};

Settings.Form = function SettingsForm(props: Props) {
  const { children } = props;
  return <STT.Form>{children}</STT.Form>;
};

Settings.FormGroup = function SettingsFormGroup(props: Props) {
  const { children } = props;
  return <STT.FormGroup>{children}</STT.FormGroup>;
};

Settings.Text = function SettingsText(props: Props) {
  const { children } = props;
  return <STT.Text>{children}</STT.Text>;
};

Settings.TextBold = function SettingsTextBold(props: Props) {
  const { children } = props;
  return <STT.TextBold>{children}</STT.TextBold>;
};

Settings.Divider = function SettingsText() {
  return <STT.Divider />;
};

Settings.Line = function SettingsLine() {
  return <STT.Line />;
};

Settings.Spacer = function SettingsSpacer(props: Props) {
  const { direction } = props;
  let style;
  switch (direction) {
    case 'right':
      style = { marginRight: '1rem' };
      break;
    case 'bottom':
      style = { marginBottom: '1rem' };
      break;
    default:
      break;
  }
  return <STT.Spacer style={style} />;
};

Settings.Email = function SettingsText(props: Props) {
  const { children } = props;
  return <STT.Email>{children}</STT.Email>;
};

Settings.LinkAction = function SettingsLinkAction(props: Props) {
  const { children } = props;
  return <STT.LinkAction>{children}</STT.LinkAction>;
};

Settings.ButtonWapper = function SettingsButtonWapper(props: Props) {
  const { children } = props;
  return <STT.ButtonWapper>{children}</STT.ButtonWapper>;
};

Settings.SegmentedControl = function SettingsSegmentedControl(props: Props) {
  const { children } = props;
  return <STT.SegmentedControl>{children}</STT.SegmentedControl>;
};

Settings.SegmentedControlSegmentBackground =
  function SettingsSegmentedControlSegmentBackground(props: Props) {
    const { style } = props;
    return <STT.SegmentedControlSegmentBackground style={style} />;
  };

Settings.defaultProps = {
  children: undefined
};
