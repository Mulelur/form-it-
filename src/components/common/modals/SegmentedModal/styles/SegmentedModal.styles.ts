import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 45rem;
	box-shadow: rgb(0 0 0 / 8%) 0px 2px 4px, rgb(0 0 0 / 6%) 0px 2px 12px;
	height: 54rem;
	padding: 5rem;
	border-radius: 2rem;
	background-color: #dad9d9;
	z-index: 2;
	background-size: cover;
	background-position: 50%;
	background-image: url('https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw4NjQxOXwwfDF8c2VhcmNofDR8fGhlYWRwaG9uZXN8fDB8fHx8MTYyMzIzODIyMw&ixlib=rb-1.2.1&q=80&w=1920&auto=format');

	@media (max-width: 900px) {
		width: 40rem;
		padding: 4.1rem;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: center;
`;

export const Body = styled.div``;

export const Footer = styled.div``;
