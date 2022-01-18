import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Heading = styled.h4`
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 10px;
  color: hsla(0, 0%, 7%, 0.5);
`;

export const TextArea = styled.textarea`
  display: block;
  box-sizing: border-box;
  border: 1px solid rgb(187, 187, 187);
  border-radius: 4px;
  outline: 0px;
  height: 100%;
  min-height: 80px;
  width: 100%;
  padding: 5px 11px 29px;
  font: inherit;
  resize: none;
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 39);
  overflow: auto;
  & :focus {
    background-color: rgb(255, 255, 255);
    color: rgb(38, 38, 39);
    /* border-color: rgb(38, 38, 39); */
    transition: all 0.2s ease 0s;
`;
