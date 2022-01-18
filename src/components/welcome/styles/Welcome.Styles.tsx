// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';
import { justBlackColor } from '../../../utils/colors';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  height: 54rem;
  padding: 5rem;
  border-radius: 2rem;
  background-color: #dad9d9;
  z-index: 2;
  background-size: cover;
  background-position: 50%;
  background-image: url('https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw4NjQxOXwwfDF8c2VhcmNofDR8fGhlYWRwaG9uZXN8fDB8fHx8MTYyMzIzODIyMw&ixlib=rb-1.2.1&q=80&w=1920&auto=format');

  @media (max-width: 900px) {
    width: 35rem;
  }
`;

export const Heading = styled.h2`
  font-size: 2.4rem;
  margin-right: 0.6rem;
`;

export const HeadingSpan = styled.span`
  color: #bbbbbb;
  padding-left: 0.6rem;
`;

export const ThumbnailWarper = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`;

export const Thumbnail = styled.img`
  width: 22rem;
  height: 22rem;
`;

export const Title = styled.h4`
  font-size: 1.7rem;
`;

export const Text = styled.p`
  font-size: 1.3rem;
  padding: 0.6rem;
`;

export const Button = styled.button`
  height: 3rem;
  width: 12rem;
  height: 3.6rem;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  background-color: ${justBlackColor};
`;

export const Warper = styled.div``;

export const LogoWarper = styled.div``;

export const ImageWarper = styled.div`
  // margin: 5px;
  // padding: 15px 20px 5px 20px;
  width: 100%;
  height: 22rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-size: cover;
  background-position: center;
`;

export const Row = styled.div`
  display: flex;
`;

export const Spacer = styled.span`
  margin: 0 1.3rem;
`;

export const CaroselButtons = styled.div`
  margin: 0.9rem;
  display: flex;
  justify-content: center;
`;

export const CaroselButton = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: rgba(255, 255, 255, 0.25);
  margin: 0 0.6rem;
`;
