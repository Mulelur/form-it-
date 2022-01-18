import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 1.5rem;
`;

export const Label = styled.div``;

export const Wrap = styled.div``;

export const Control = styled.div``;

export const SelectF = styled.select`
  border: 1px solid #dbdfea;
  color: #3c4d62;
  background-color: #fff;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 4px;
  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);
    width: calc(1rem + 12px);
  }
`;

export const Option = styled.option`
  padding: 0.5rem;
`;
