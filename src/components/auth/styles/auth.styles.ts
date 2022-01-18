import styled from 'styled-components';
import { lightGray } from '../../../utils/colors';

export const Container = styled.div`
  height: 90vh;
  font-size: 1.4rem;
`;

export const Header = styled.nav`
  display: flex;
  padding: 2.5rem 4.5rem;
`;

export const HeaderLogo = styled.div`
  margin-right: auto;
`;

export const HeaderLink = styled.a`
  padding: 0.8rem 1.3rem;
`;

export const HeaderButton = styled.button`
  padding: 0.7rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px 0px rgba(0, 0, 0, 0.06);
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h3`
  font-size: 2.4rem;
  font-weight: 400;
  padding: 2rem;
`;

export const Divider = styled.span`
  position: relative;
  padding: 1.2rem;
`;

export const Footer = styled.div`
  border-top: 1px solid ${lightGray};
  display: flex;
  padding: 4rem;
  position: relative;
`;

export const FooterLink = styled.div`
  padding: 0.6rem;
`;

export const CopyRight = styled.span`
  margin-right: auto;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26rem;
`;

export const Spacer = styled.div`
  padding: 1rem;
`;
