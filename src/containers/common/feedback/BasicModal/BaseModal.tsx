import * as React from 'react';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import BasicModal from '../../../../components/common/feedback/BasicModal';
import { useActions, useGlobalState } from '../../../../store';

type Props = {
	children: React.ReactNode;

	show: boolean;

	style?: React.CSSProperties;

	// okText?: string;

	// cancelText?: string;

	// onOk?: (event: React.MouseEvent<HTMLButtonElement>) => void;

	// onCancel?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function BasicModalContainer(props: Props) {
	const { children, show, style } = props;

	// const [open, setOpen] = React.useState(false);

	const { showModal } = useGlobalState((state) => state.Modal);

	const { setShowModal } = useActions((action) => action.Modal);

	const unmounted = React.useRef(false);

	React.useEffect(() => {
		return () => {
			unmounted.current = true;
		};
	}, []);

	React.useEffect(() => {
		if (!unmounted.current) {
			setShowModal(show);
			// setOpen(show);
		}
	}, [show]);

	const handleClose = () => {
		// setOpen(false);
		setShowModal(false);
	};

	return (
		<BasicModal style={style}>
			<Modal
				open={showModal}
				// onClose={onCancel}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<BasicModal.Body>{children}</BasicModal.Body>
			</Modal>
		</BasicModal>
	);
}

BasicModalContainer.defaultProps = {
	style: {},
	// onOk: () => {},
	// onCancel: () => {},
};
