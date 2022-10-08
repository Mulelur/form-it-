// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/require-default-props */
import React from 'react';
import { Welcome } from '../../components';
import { useActions, useGlobalState } from '../../store';
// import { InputField } from '../fields';
import Button from '../../components/common/buttons/PrimaryButton';
import img2 from '../../assets/images/rodion-kutsaev-0VGG7cqTwCo-unsplash.jpg';
// import img3 from '../../assets/images/xps-uWFFw7leQNI-unsplash.jpg';
// import { defaultInputStyles } from '../../Defaults/project.default';

export default function WelcomeContainer() {
	const { showTutorial } = useGlobalState((state) => state.Tutorial);
	const { toggleShowTutorial } = useActions((action) => action.Tutorial);
	const { playVedio } = useActions((action) => action.FormIt);
	const handleShowToggle = () => {
		toggleShowTutorial(showTutorial);
	};

	return (
		<Welcome>
			<Welcome.Warper>
				<Welcome.LogoWarper>Form It</Welcome.LogoWarper>
				<Welcome.Heading>
					Welcome to Form It
					<Welcome.HeadingSpan>Start learning with a…</Welcome.HeadingSpan>
				</Welcome.Heading>
				<Welcome.ThumbnailWarper onClick={() => playVedio(true)}>
					<Welcome.ImageWarper image={img2} />
				</Welcome.ThumbnailWarper>
				<Welcome.CaroselButtons>
					<Welcome.CaroselButton />
					<Welcome.CaroselButton />
				</Welcome.CaroselButtons>
				<Welcome.Title>Tutorial</Welcome.Title>
				<Welcome.Text>
					Follow along with our step-by-step video tutorial.
				</Welcome.Text>
				<Welcome.Row>
					<Welcome.Button onClick={handleShowToggle}>
						Watch Tutorial
					</Welcome.Button>
					<Welcome.Spacer />
					<Button onClick={handleShowToggle} color="secondary" type="button">
						skip
					</Button>
				</Welcome.Row>
			</Welcome.Warper>
		</Welcome>
	);
}
