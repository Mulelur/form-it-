// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import * as BM from './styles/BasicModal.styles';

type Props = {
	children: React.ReactNode;
	style?: React.CSSProperties;
};

export default function BasicModal(props: Props) {
	const { children, style } = props;
	return (
		<>
			<BM.Container style={style}>{children}</BM.Container>
		</>
	);
}

BasicModal.Header = function BasicModalHeader(props: Props) {
	const { children } = props;
	return <BM.Header>{children}</BM.Header>;
};

BasicModal.Body = function BasicModalBody(props: Props) {
	const { children } = props;
	return <BM.Body>{children}</BM.Body>;
};

BasicModal.defaultProps = {
	style: {},
};
