import { Action, action } from 'easy-peasy';

interface IModal {
	showModal: boolean;
	location?: string;
	setShowModal: Action<IModal, boolean>;
}

const Modal: IModal = {
	showModal: true,
	location: '',
	setShowModal: action((state, payload) => {
		const oldState = state;
		oldState.showModal = payload;
	}),
};
export default Modal;
