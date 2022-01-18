// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';
import { headerFontSize } from '../../../../utils/fonts';

export const Container = styled.div`
  margin: 1.4rem;
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 48px;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-start;
  color: #333;
  cursor: default;
  border-bottom: 1px solid #eee;
  margin-bottom: 2.1rem;
`;

export const Title = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  font-size: ${headerFontSize};
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TitleSpan = styled.span``;
