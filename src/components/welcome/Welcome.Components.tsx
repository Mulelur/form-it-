// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {
  Container,
  Heading,
  HeadingSpan,
  Text,
  Thumbnail,
  Title,
  Button,
  Warper,
  LogoWarper,
  ThumbnailWarper,
  ImageWarper,
  Row,
  Spacer,
  CaroselButtons,
  CaroselButton
} from './styles/Welcome.Styles';

type Props = {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  image?: string;
};

export default function Welcome(props: Props) {
  const { children } = props;
  return <Container>{children}</Container>;
}

Welcome.Heading = function WelcomeHeading(props: Props) {
  return <Heading>{props.children}</Heading>;
};

Welcome.HeadingSpan = function WelcomeHeadingSpan(props: Props) {
  return <HeadingSpan>{props.children}</HeadingSpan>;
};

Welcome.Thumbnail = function WelcomeThumbnail() {
  return <Thumbnail />;
};

Welcome.ThumbnailWarper = function WelcomeThumbnailWarper(props: Props) {
  return <ThumbnailWarper>{props.children}</ThumbnailWarper>;
};

Welcome.Title = function WelcomeTitle(props: Props) {
  return <Title>{props.children}</Title>;
};

Welcome.Text = function WelcomeText(props: Props) {
  return <Text>{props.children}</Text>;
};

Welcome.Button = function WelcomeButton(props: Props) {
  const { children } = props;
  return <Button>{children}</Button>;
};

Welcome.Warper = function WelcomeWarper(props: Props) {
  return <Warper>{props.children}</Warper>;
};

Welcome.LogoWarper = function WelcomeLogoWarper(props: Props) {
  return <LogoWarper>{props.children}</LogoWarper>;
};

Welcome.ImageWarper = function WelcomeImageWarper(props: Props) {
  const { image } = props;
  return <ImageWarper style={{ backgroundImage: `url(${image})` }} />;
};

Welcome.Row = function WelcomeRow(props: Props) {
  return <Row>{props.children}</Row>;
};

Welcome.Spacer = function WelcomeSpacer() {
  return <Spacer />;
};

Welcome.CaroselButtons = function WelcomeCaroselButtons(props: Props) {
  return <CaroselButtons>{props.children}</CaroselButtons>;
};

Welcome.CaroselButton = function WelcomeCaroselButton() {
  return <CaroselButton />;
};
