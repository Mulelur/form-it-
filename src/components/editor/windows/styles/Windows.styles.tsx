// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components/macro';

export const Container = styled.div`
  margin-right: 1.2%;
  position: absolute;
  overflow: hidden;
  width: 260px;
  background: #fff;
  bottom: 5rem;
  right: 19%;
  border-radius: 10px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.05), 0 5px 20px 0 rgba(0, 0, 0, 0.08);
  z-index: 999;
  will-change: transform;
`;

export const WindowBarCursor = styled.div`
  cursor: grab;
`;

export const NavigationBar = styled.div`
  padding: 0.9rem;
  position: relative;
  display: flex;
  width: 100%;
  height: 4.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationBarAction = styled.div`
  height: 100%;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StackContainer = styled.div`
  width: 100%;
  transition: all 0.2s ease 0s;
`;

export const NavigationContent = styled.div`
  position: relative;
  width: 100%;
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  transition: all 0.2s ease 0s;
  padding: 1rem;
`;

export const Title = styled.div`
  padding: 0.4rem;
  color: #333;
  font-weight: 600;
  pointer-events: none;
  text-align: center;
  font-size: 12px;
`;

export const ImagePreview = styled.div``;

export const Tab = styled.div``;

export const SearchWaper = styled.div`
  display: flex;
  border-radius: 4px;
  background: #ccc;
  padding: 0.2rem 0.8rem;
`;

export const Search = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
`;
