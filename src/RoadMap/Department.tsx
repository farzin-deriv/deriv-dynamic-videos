import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Animated, Fade, Move, Scale} from 'remotion-animated';

const {fontFamily} = loadFont();

export const Department: React.FC = () => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 24;
	const color = '#ffffff';
	const offset = videoConfig.height / 16;
	const startDelay = 80;
	const endDelay = 100;

	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<Animated
				delay={startDelay}
				animations={[
					Fade({to: 1, initial: 0}),
					Move({y: -offset}),
					Fade({to: 0, start: endDelay}),
					Scale({by: 0, start: endDelay, mass: 75}),
				]}
				style={{opacity: 0}}
			>
				<p style={{fontFamily, fontSize, color}}>Front-End</p>
			</Animated>
		</AbsoluteFill>
	);
};
