import styled from 'styled-components';
import { lightGray } from '../../../utils/colors';

export const Container = styled.div`
  width: 100%;
  font-size: 1.3rem;
  padding: 0.3rem 0.3rem;
  border-top: 1px dashed ${lightGray};
  border-bottom: 1px dashed ${lightGray};
`;

export const Title = styled.span`
  padding: 2rem 0;
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 1rem 0.5rem;
`;

export const Col = styled.div`
  width: 100%;
  max-width: 32rem;
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin: 1rem;
  padding: 0.9rem;
  background-color: #fff;
  box-shadow: 0px 4px 6px -1px rgb(0 0 0 / 10%),
    0px 2px 4px -1px rgb(0 0 0 / 6%);
`;

export const ControllerText = styled.div`
  margin-right: auto;
`;

export const ControllerButtons = styled.div``;

export const ControllerButton = styled.div``;

export const Controlled = styled.div``;

export const Border = styled.div`
  opacity: 1;
  height: 10px;
  margin:  .3rem 0;
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    margin 1rem 0;
    padding: 1.3rem 2.4rem;
    height: auto;
    border: 1px dashed ${lightGray};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const SelectWapper = styled.div`
  width: 100%;
`;
