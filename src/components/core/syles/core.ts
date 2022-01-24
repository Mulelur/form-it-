// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';
import { Item } from '../../editor/sections/Group/styles/Group.styles';
import { Item as WorkItem } from '../../layout/workArea/styles/workArea';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  & :hover ${Item} {
    ${WorkItem} & {
      background-color: #f3f3f3;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: calc(100vh - 6rem);
  @media (max-width: 635px) {
    height: 100%;
  }
`;

export const Col = styled.div``;
