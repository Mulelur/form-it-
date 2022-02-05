import styled from 'styled-components/macro';
import { Link as ReachRouterLink } from 'react-router-dom';
import { justBlackColor, lightGray } from '../../../../utils/colors';

export const Container = styled.div`
  padding: 1.2rem;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f4f5fc;
  overflow-y: scroll;
  position: relative;
`;

export const Body = styled.div``;

export const Projects = styled.div`
  border-top: 1px solid #eee;
  height: 330px;
  // display: grid;
  // gap: 0.5rem;
  // grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
`;

export const Videos = styled.div`
  border-top: 1px solid #eee;
  overflow-x: hidden;
  height: 330px;
  display: flex;

  @media (max-width: 900px) {
    overflow-y: scroll;
    // justify-items: center;
  }
`;

export const Menu = styled.button`
  margin: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  outline: none;
  position: relative;
  &:hover {
    background-color: rgb(227, 227, 227);
    transition: all 0.2s ease 0s;
  }
  display: none;
`;

export const ViewIconWarper = styled.button`
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 3.2rem;
  height: 3.2rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  outline: none;
  &:hover {
    background-color: rgb(227, 227, 227);
    transition: all 0.2s ease 0s;
  }
`;

export const MenuWarper = styled.div`
  position: absolute;
  top: 2.7rem;
  left: 0.1rem;
`;

export const MenuList = styled.ul`
  list-style: none;
  background-color: #fff;
  width: 19.7rem;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 0.7rem;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const MenuListItem = styled.li`
  font-size: 1.3rem;
  font-weight: 400;
  color: #888888;
  padding: 0.6rem;
  width: 100%;
  margin: 0.3rem 0;
  text-align: initial;
  border-radius: 0.5rem;
  &:hover {
    transition: all 0.2s ease 0s;
    font-size: 1.3rem;
    font-weight: 400;
    background-color: blue;
    color: #fff;
    font-weight: 400;
  }
`;

export const ProjectDescription = styled.div`
  margin: 0 1rem;
`;

export const ProjectDescriptionText = styled.span`
  color: #888888;
  font-size: 1.2rem;
  line-height: 1.2;
  margin: 0 0.4rem;
`;

export const ProjectTitle = styled(ReachRouterLink)`
  margin: 1.3rem;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  margin-right: auto;
  color: currentColor;
  text-decoration: none;
`;

export const ProjectInfo = styled.div``;

export const ProjectThumbnail = styled(ReachRouterLink)`
  margin: 1rem;
  margin-bottom: auto;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const SortMenu = styled.div``;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const ProjectListHeader = styled.div`
  margin: 1.2rem;
  display: flex;
  align-items: center;
`;

export const IconWarper = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  padding-left: 0.8rem;
  height: 2.1rem;
  outline: none;
  font-size: 17px;
`;

export const Header = styled.div``;

export const HeaderTitle = styled.div`
  font-size: 1.7rem;
  padding: 1.2rem;
  padding-bottom: 0.7rem;
`;

export const Project = styled.div`
  background-color: #f4f5fc;
  width: 24rem;
  height: 28rem;
  border-radius: 8px;
  margin: 1.2rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  animation: 0.3s ease-in-out 0s 1 normal none running lbWRkT;
  transition: all 0.2s ease-in 0s;
  &:hover {
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px,
      rgb(0 0 0 / 4%) 0px 8px 14px, rgb(0 0 0 / 2%) 0px 12px 16px;
  }
`;

export const Video = styled.div`
  width: 24rem;
  height: 100%;
  border-radius: 8px;
  margin: 1.2rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  animation: 0.3s ease-in-out 0s 1 normal none running lbWRkT;
  transition: all 0.2s ease-in 0s;
  &:hover {
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px,
      rgb(0 0 0 / 4%) 0px 8px 14px, rgb(0 0 0 / 2%) 0px 12px 16px;
  }
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoGrid = styled.div`
  width: 6rem;
  height: 5rem;
  border-radius: 8px;
  margin: 1.2rem;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  animation: 0.3s ease-in-out 0s 1 normal none running lbWRkT;
  transition: all 0.2s ease-in 0s;
  &:hover {
    box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px,
      rgb(0 0 0 / 4%) 0px 8px 14px, rgb(0 0 0 / 2%) 0px 12px 16px;
  }
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 22rem;
  height: 20rem;
  border-radius: 0.6rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
`;

export const ProjectHeaderTitle = styled.h5`
  font-size: 1.9rem;
  text-transform: capitalize;
`;

export const VideoIconWaper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.div`
  height: 100%;
  width: 100%;
`;

export const GridView = styled.div`
  border-top: 1px solid #eee;
  height: 330px;
  display: flex;
`;

export const ListView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  & :hover {
    background-color: ${lightGray};
  }
`;

export const ListItem = styled.li`
  font-size: 1.4rem;
  width: 100%;
  padding: 12px 20px;
  margin: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const ListButton = styled.button``;

export const ListText = styled.p``;

export const Diteils = styled.div`
  margin-right: auto;
`;

export const ListHeading = styled.h3`
  color: ${justBlackColor};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: capitalize;
`;

export const Box = styled.div`
  background-color: ${justBlackColor};
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 1.5rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
