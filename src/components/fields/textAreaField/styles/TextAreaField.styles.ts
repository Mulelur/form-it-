import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 1.5rem;
`;

export const Wrap = styled.div``;

export const Label = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #344357;
  margin-bottom: 0.5rem;
`;

export const TextArea = styled.textarea`
  display: block;
  padding: 0.4375rem 1rem;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.25rem;
  outline: none;
  background-clip: padding-box;
  border: 1px solid #dbdfea;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  resize: none;
  &:focus {
    border-color: #0b7d5e;
    box-shadow: 0 0 0 0.2rem rgb(51 184 148 / 50%);
  }
`;
