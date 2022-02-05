// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 2px solid #fafafa;
  width: 100% !important;
`;

export const Heading = styled.h4`
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 10px;
  color: hsla(0, 0%, 7%, 0.5);
`;

export const ImageWarper = styled.div`
  display: flex !important;
  width: 100% !important;
  height: 130px;
  background-size: cover;
  position: relative;
  background-position: 50%;
  border-radius: 5px;
  align-items: flex-end;
  justify-content: flex-end;
  background-image: url('https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw4NjQxOXwwfDF8c2VhcmNofDR8fGhlYWRwaG9uZXN8fDB8fHx8MTYyMzIzODIyMw&ixlib=rb-1.2.1&q=80&w=1920&auto=format');
`;

export const ImageButton = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  cursor: pointer;
  bottom: 0.8rem;
  right: 0.8rem;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const IconWarper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  bottom: 4.8rem;
  right: 1rem;
`;

export const Color = styled.div`
  width: 28px;
  height: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  inset: 0px;
  border-radius: 2px;
  position: absolute;
  bottom: 1.8rem;
  right: 0.8rem;
`;