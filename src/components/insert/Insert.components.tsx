/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import { PopoverProps } from '@mui/material';
import React from 'react';
import {
  Container,
  Search,
  Header,
  Body,
  Fields,
  FieldsItem,
  Footer,
  Title
} from './styles/Insert.styles';

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  open?: boolean;
  onClose?: PopoverProps['onClose'];
};

export default function InsertBox(props: Props) {
  const { children, open } = props;
  let style;
  if (!open) {
    style = {
      display: 'none'
    };
  }
  return <Container style={style}>{children}</Container>;
}

InsertBox.Search = function InsertBoxSearch(props: Props) {
  return <Search>{props.children}</Search>;
};

InsertBox.Header = function InsertBoxHeader(props: Props) {
  return <Header>{props.children}</Header>;
};

InsertBox.Body = function InsertBoxBody(props: Props) {
  return <Body>{props.children}</Body>;
};

InsertBox.Fields = function InsertBoxFields(props: Props) {
  return <Fields>{props.children}</Fields>;
};

InsertBox.FieldsItem = function InsertBoxFieldsItem(props: Props) {
  const { children, style } = props;
  return <FieldsItem style={style}>{children}</FieldsItem>;
};

InsertBox.Footer = function InsertBoxFooter(props: Props) {
  return <Footer>{props.children}</Footer>;
};

InsertBox.Title = function InsertBoxTitle(props: Props) {
  return <Title>{props.children}</Title>;
};
