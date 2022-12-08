import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Animated, Fade, Move, Scale} from 'remotion-animated';

const {fontFamily} = loadFont();

export const WeekNumber: React.FC<{week: number}> = ({week}) => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 6;
	const color = '#ffffff';
	const duration = 30;
	const offset = videoConfig.height / 16;
	const startDelay = 80;
	const endDelay = startDelay + 100;

	return (
		<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
			<Animated
				animations={[
					Fade({to: 1, initial: 0}),
					Scale({by: 1, initial: 10, duration}),
					Move({y: offset, start: startDelay}),
					Fade({to: 0, start: endDelay}),
					Scale({by: 0, start: endDelay, mass: 75}),
				]}
			>
				<h1 style={{fontFamily, fontSize, color, fontWeight: 'bold'}}>
					{`Week #${week}`}
				</h1>
			</Animated>
		</AbsoluteFill>
	);
};
