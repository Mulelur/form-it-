import * as React from 'react';
import {
	Body,
	Container,
	Footer,
	Header,
} from './styles/SegmentedModal.styles';

type Props = {
	children: React.ReactNode;
};

export default function SegmentedModal(props: Props) {
	const { children } = props;
	return (
		<>
			<Container>{children}</Container>
		</>
	);
}

SegmentedModal.Header = function SegmentedModalHeader(props: Props) {
	const { children } = props;
	return (
		<>
			<Header>{children}</Header>
		</>
	);
};

SegmentedModal.Body = function SegmentedModalBody(props: Props) {
	const { children } = props;
	return (
		<>
			<Body>{children}</Body>
		</>
	);
};

SegmentedModal.Footer = function SegmentedModalFooter(props: Props) {
	const { children } = props;
	return (
		<>
			<Footer>{children}</Footer>
		</>
	);
};
