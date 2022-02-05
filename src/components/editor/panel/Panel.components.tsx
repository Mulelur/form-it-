/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
// import { FlexDirection } from '../../../Interface/htmlElement.intergace';
import * as PN from './styles/Panel.styles';

type Props = {
  children?: React.ReactNode;
  color?: string;
  filter?: string;
  onClick?: (
    event: React.MouseEvent<
      HTMLDivElement | HTMLButtonElement | HTMLAnchorElement
    >
  ) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  value?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large' | 'x-small';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  segmentState?: number;
  width?: string;
  id?: string;
};

export default function Panel(props: Props) {
  return <PN.Container>{props.children}</PN.Container>;
}

Panel.Row = function PanelRow(props: Props) {
  const { style, children } = props;
  return <PN.Row style={style}>{children}</PN.Row>;
};

Panel.TitleWrapper = function PanelTitleWrapper(props: Props) {
  const { style, children } = props;
  return <PN.TitleWrapper style={style}>{children}</PN.TitleWrapper>;
};

Panel.Title = function PanelTitle(props: Props) {
  return <PN.Title>{props.children}</PN.Title>;
};

Panel.TitleSpan = function PanelTitle(props: Props) {
  return <PN.TitleSpan>{props.children}</PN.TitleSpan>;
};

Panel.InputWrapper = function PanelInputWrapper(props: Props) {
  const { children } = props;
  return <PN.InputWrapper>{children}</PN.InputWrapper>;
};

Panel.Input = function PanelInput(props: Props) {
  const { onChange, size, value } = props;
  let style;
  switch (size) {
    case 'x-small':
      style = {
        width: '30px',
        height: ' 26px;'
      };
      break;
    case 'small':
      style = {
        width: '31px',
        height: ' 26px;'
      };
      break;
    case 'medium':
      style = {
        width: '45px',
        height: ' 26px;'
      };
      break;
    default:
      style = {
        width: '85px',
        height: ' 26px;'
      };
      break;
  }
  return <PN.Input value={value} style={style} onChange={onChange} />;
};

Panel.InputLabel = function PanelInputLabel(props: Props) {
  return <PN.InputLabel>{props.children}</PN.InputLabel>;
};

Panel.InputDivider = function PanelInputDivider() {
  return <PN.InputDivider />;
};

Panel.NumberTicker = function PanelInput(props: Props) {
  return <PN.NumberTicker>{props.children}</PN.NumberTicker>;
};

Panel.TickerUp = function PanelTickerUp(props: Props) {
  return <PN.TickerUp>{props.children}</PN.TickerUp>;
};

Panel.TickerDown = function PanelTickerDown(props: Props) {
  return <PN.TickerDown>{props.children}</PN.TickerDown>;
};

Panel.PadLockWrapper = function PanelPadLockWrapper(props: Props) {
  return <PN.PadLockWrapper>{props.children}</PN.PadLockWrapper>;
};

Panel.PopupButtonWrapper = function PanelPopupButtonWrapper(props: Props) {
  return <PN.PopupButtonWrapper>{props.children}</PN.PopupButtonWrapper>;
};

Panel.SegmentedControl = function PanelSegmentedControl(props: Props) {
  const { style, children } = props;
  return (
    <PN.SegmentedControl style={style}>{children}</PN.SegmentedControl>
  );
};

Panel.SegmentsWrapper = function PanelSegmentsWrapper(props: Props) {
  const { style, children } = props;
  return <PN.SegmentsWrapper style={style}>{children}</PN.SegmentsWrapper>;
};

Panel.SegmentedControlSegmentBackground =
  function PanelSegmentedControlSegmentBackground(props: Props) {
    const { style, id } = props;
    return <PN.SegmentedControlSegmentBackground id={id} style={style} />;
  };

Panel.Segment = function PanelSegment(props: Props) {
  const { onClick, children, id } = props;
  return (
    <PN.Segment id={id} onClick={onClick}>
      {children}
    </PN.Segment>
  );
};

Panel.Divider = function PanelDivider() {
  return <PN.Divider />;
};

Panel.PopoutButton = function PanelPopoutButton(props: Props) {
  return <PN.PopoutButton>{props.children}</PN.PopoutButton>;
};

Panel.Button = function PanelButton(props: Props) {
  const { children, onClick } = props;
  return <PN.Button onClick={onClick}>{children}</PN.Button>;
};

Panel.IconWrapper = function PanelIconWrapper(props: Props) {
  return <PN.IconWrapper>{props.children}</PN.IconWrapper>;
};

Panel.CloseWrapper = function PanelCloseWrapper(props: Props) {
  return <PN.CloseWrapper>{props.children}</PN.CloseWrapper>;
};

Panel.Form = function PanelForm(props: Props) {
  return <PN.Form onSubmit={props.onSubmit}>{props.children}</PN.Form>;
};

Panel.BoxColor = function PanelBoxColor(props: Props) {
  return <PN.BoxColor>{props.children}</PN.BoxColor>;
};

Panel.Color = function PanelColor(props: Props) {
  const { color } = props;
  return <PN.Color color={color} />;
};

Panel.Filter = function PanelColor(props: Props) {
  const { filter } = props;
  const style = { filter };
  return <PN.Filter style={style} />;
};

Panel.FusedNumberInputs = function PanelFusedNumberInputs(props: Props) {
  return <PN.FusedNumberInputs>{props.children}</PN.FusedNumberInputs>;
};

Panel.RInput = function PanelRInput() {
  return <PN.RInput />;
};

Panel.TextInput = function PanelTextInput(props: Props) {
  const { value, placeholder, onChange } = props;
  return (
    <PN.TextInput value={value} placeholder={placeholder} onChange={onChange} />
  );
};

Panel.StackRow = function PanelStackRow(props: Props) {
  const { children } = props;
  return <PN.StackRow>{children}</PN.StackRow>;
};

Panel.Add = function PanelAdd(props: Props) {
  return <PN.Add>{props.children}</PN.Add>;
};

Panel.Group = function PanelGroup(props: Props) {
  return <PN.Group>{props.children}</PN.Group>;
};

Panel.GroupDivider = function PanelGroupDivider() {
  return <PN.GroupDivider />;
};

Panel.SliderWarper = function PanelSlider(props: Props) {
  return <PN.SliderWarper>{props.children}</PN.SliderWarper>;
};

Panel.Col = function PanelCol(props: Props) {
  return <PN.Col>{props.children}</PN.Col>;
};

Panel.ElementButtons = function PanelElementButtons(props: Props) {
  const { children, onClick } = props;
  return <PN.ElementButtons onClick={onClick}>{children}</PN.ElementButtons>;
};

Panel.Grid = function PanelGrid(props: Props) {
  return <PN.Grid>{props.children}</PN.Grid>;
};

Panel.Spacer = function PanelGrid() {
  return <PN.Spacer />;
};
