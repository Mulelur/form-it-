import styled from 'styled-components/macro';
import { lightGray } from '../../../utils/colors';

export const Container = styled.div`
	width: 100%;
	font-size: 1.3rem;
	border-top: 1px dashed ${lightGray};
	border-bottom: 1px dashed ${lightGray};
	&:nth-child(1) {
		border-bottom: none;
		padding: 0.5rem;
	}
`;

export const Title = styled.div`
	padding: 0.6rem 0;
	display: flex;
	margin-right: auto;
	align-items: center;
`;

export const TextPreviewer = styled.span`
	margin-right: auto;
`;

export const ButtonPreviewer = styled.button`
	margin-right: auto;
`;

export const Button = styled.button`
	opacity: 0;
	width: 4rem;
	height: 3rem;
	border: none;
	transition: all 0.3s ease;
	background-color: transparent;
`;

export const Preview = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	transition: all 0.3s ease;
	margin-left: 0rem;

	&: hover {
		padding: 1rem;
		margin: 0.3rem;
		box-shadow: 0px 4px 6px 0px rgba(50, 50, 93, 0.11),
			0px 1px 3px 0px rgba(0, 0, 0, 0.08);
		margin-bottom: 1.1rem;
	}

	&: hover ${Button} {
		opacity: 1;
	}
`;

export const Divider = styled.span`
	height: 3rem;
	background-color: #bbb;
	width: 1px;
	margin: 0.3rem 1rem;
	padding: 0.5rem 0;
`;

export const Row = styled.div`
	display: flex;
	align-items: center;
`;

export const Col = styled.div`
	// width: 100%;
	display: flex;
	max-width: 32rem;
`;

export const Controller = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10rem;
	height: 4rem;
	margin: 0.6rem 0.5rem;
	padding: 0.9rem;
	background-color: #fff;
	box-shadow: 0px 4px 6px -1px rgb(0 0 0 / 10%),
		0px 2px 4px -1px rgb(0 0 0 / 6%);
`;

export const ControllerText = styled.div`
	// margin-right: auto;
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

export const SelectWapper = styled.div`
	width: 100%;
`;
