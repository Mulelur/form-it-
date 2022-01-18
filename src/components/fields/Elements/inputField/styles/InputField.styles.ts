// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 0.4rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #344357;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  height: 3.7rem;
  padding: 0.3rem 0.3rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #3c4d62;
  outline: none;
  background-clip: padding-box;
  border: 1px solid #dbdfea;
  border-radius: 4px;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: #0b7d5e;
    box-shadow: 0 0 0 0.2rem rgb(51 184 148 / 50%);
  }
`;

export const Input2 = styled.input`
  display: block;
  width: 100%;
  font-family: inherit;
  color: rgb(31, 127, 255);
  padding: 0px 0px 8px;
  border: none;
  outline: none;
  max-width: 20rem;
  border-radius: 0px;
  appearance: none;
  background-image: none;
  background-position: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  transform: translateZ(0px);
  font-size: 30px;
  -webkit-font-smoothing: antialiased;
  line-height: unset;
  -webkit-text-fill-color: rgba(31, 127, 255, 0.3);
  animation: 1ms ease 0s 1 normal none running native-autofill-in;
  transition: background-color 1e8s ease 0s, box-shadow 0.1s ease-out 0s;
  box-shadow: rgb(31 127 255 / 30%) 0px 1px;
  background-color: transparent !important;
  ////
  & :read-only {
    caret-color: transparent;
  }
  & :focus {
    box-shadow: rgb(31 127 255) 0px 2px;
  }
`;

export const InputWebflow = styled.input`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: transparent;
  & :after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
`;

// ${({ option }) =>
//     option.boxShadow
//       ? `box-shadow: ${({ style }) =>
//           `${style.boxShadow.xaxis}px``${style.boxShadow.yaxis}px``${style.boxShadow.blur}px``${style.boxShadow.spread}px``${style.boxShadow.color}`}`
//       : null};
// `;
