import styled from 'styled-components';

export const MenuBtn = styled.button`
  min-width: 30px;
  flex: 0 0 auto;
  align-items: center;
  margin-left: 10px;
  margin-right: 12px;
  justify-content: center;
  border-radius: 15px;
  font-size: 13px;
  font-weight: 600;
  height: 30px;
  border: none;
  user-select: none;
  transition: border-color ease 0.15s, background-color ease 0.15s;
  display: none;

  @media (max-width: 900px) {
    display: flex;
  }
`;
