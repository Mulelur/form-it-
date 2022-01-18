// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { justBlackColor } from '../../../../../utils/colors';

export const Button = styled.button`
  background-color: ${justBlackColor};
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0.9rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
