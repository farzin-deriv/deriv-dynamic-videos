import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Animated, Move, Rotate, Scale} from 'remotion-animated';

export const Background: React.FC = () => {
	const config = useVideoConfig();
	const backgroundColor = '#ff444f';
	const startDelay = 190;
	const endDelay = config.durationInFrames - startDelay - 40;
	const duration = 100;
	const offset = config.height * 1.5;

	return (
		<Animated
			delay={startDelay}
			animations={[
				Scale({by: 4, initial: 4}),
				Rotate({degrees: -260, duration}),
				Move({x: offset, y: -(offset / 15), duration}),
				Move({y: -offset, start: endDelay}),
			]}
		>
			<AbsoluteFill
				style={{backgroundColor, width: config.width, height: config.height}}
			/>
		</Animated>
	);
};
