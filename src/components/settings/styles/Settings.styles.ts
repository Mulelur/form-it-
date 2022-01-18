import styled from 'styled-components';
import { lightGray } from '../../../utils/colors';

export const Container = styled.div`
  margin: 4rem;
  padding: 3rem 5rem;
  display: flex;
  justify-content: center;
  @media (max-width: 635px) {
    display: block;
    margin: 0;
    padding: 1.1rem 2.1rem;
  }
`;

export const NavHeading = styled.h3`
  font-size: 1.9rem;
`;

export const Nav = styled.div`
  width: 20rem;

  @media (max-width: 635px) {
    width: 100%;
  }
`;

export const NavLink = styled.div``;

export const Profile = styled.div`
  width: 43rem;
`;

export const ProfileImage = styled.div`
  width: 13rem;
  height: 13rem;
  margin: 2rem;
  border-radius: 50%;
  border: 6px solid #fff;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-position: top;
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  margin: 2rem 0;
`;

export const TitleSub = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
`;

export const Text = styled.p`
  padding: 1rem;
  font-size: 1.3rem;
  @media (max-width: 635px) {
    padding: 0.8rem;
  }
`;

export const TextBold = styled.span`
  font-weight: 700;
`;

export const Divider = styled.div`
  width: 1px;
  background-color: ${lightGray};
  margin: 0 1.5rem;
`;

export const Email = styled.span``;

export const NavList = styled.ul`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  list-style: none;
  &: hover {
    // border: 1px solid ${lightGray};
    background-color: #fbfbfb;
  }

  @media (max-width: 635px) {
    display: flex;
    justify-content: space-between;
    background: none;
    border: none;
  }
`;

export const List = styled.ul``;

export const Form = styled.form``;

export const FormGroup = styled.div`
  display: flex;
  @media (max-width: 635px) {
    display: block;
  }
`;

export const NavListItem = styled.li`
  width: 16.3rem;
  display: flex;
  align-items: center;
  margin: 1.9rem 0;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 33px;
  @media (max-width: 635px) {
    border: none;
    background-color: transparent;
    width: 20rem;
    margin: 0;
    width: max-content;
  }
`;

export const ButtonWapper = styled.div`
  display: flex;
  padding: 0.9rem 1rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lightGray};
  margin: 1.5rem 0;
`;

export const LinkAction = styled.a`
  color: #1976d2;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Spacer = styled.div``;

export const SegmentedControl = styled.div`
  display: none;
  @media (max-width: 635px) {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${lightGray};
    position: relative;
  }
`;

// export const SegmentsWrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex: 1;
//   align-content: stretch;
//   align-items: center;
// `;

export const SegmentedControlSegmentBackground = styled.div`
  height: 2px;
  width: 9rem;
  top: -1px;
  position: absolute;
  transition: left 0.4s;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 0 0 rgba(0, 0, 0, 0.05);
  background-color: blueviolet;
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
