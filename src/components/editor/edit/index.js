import React from "react";
import { Container, Header, Body } from "./styles/edit";

export default function Edit({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Edit.Header = function Edit({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Edit.Body = function EditBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
