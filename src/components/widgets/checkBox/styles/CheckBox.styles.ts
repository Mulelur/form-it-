// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div``;

export const CheckBoxInput = styled.input`
  &input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1.5rem;
  height: 1.47187rem;
  opacity: 0;

  position: absolute;
  height: 1px;
  width: 1px;
  opacity: 0;
`;

export const CheckBoxLabel = styled.label`
  font-size: 14px;
  line-height: 1.25rem;
  padding-top: 0.125rem;
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
  &::before {
    border-radius: 4px;
    transition: background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    position: absolute;
    top: -2rem;
    left: -1.6rem;
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    pointer-events: none;
    content: '';
    background-color: #fff;
    border: #dbdfea solid 2px;

    color: #fff;
    border-color: #0fac81;
    background-color: #0fac81;

    &::after {
      position: absolute;
      top: -0.02813rem;
      left: -2.25rem;
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      content: '';
      background: no-repeat 50% / 50% 50%;

      content: '';

      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-image: none !important;
      font-family: 'Nioicon';
      color: #fff;

      opacity: 1;
      top: 0;
    }
  }
`;
