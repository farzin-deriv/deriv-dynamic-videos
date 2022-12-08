import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Animated, Fade, Move, Scale} from 'remotion-animated';

const {fontFamily} = loadFont();

export const Title: React.FC<{title: string}> = ({title}) => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 12;
	const marginTop = fontSize / 3;
	const marginRight = marginTop * 1.5;
	const color = '#ffffff';
	const duration = 75;
	const startDelay = 250;
	const endDelay = startDelay + 50;
	const offset = videoConfig.width;

	return (
		<AbsoluteFill style={{alignItems: 'flex-end'}}>
			<Animated
				delay={startDelay}
				animations={[
					Fade({to: 1, initial: 0, duration}),
					Move({x: 0, initialX: offset}),
					Move({x: 50, start: endDelay}),
					Fade({to: 0, start: endDelay}),
					Scale({by: 0, start: endDelay, mass: 75}),
				]}
				style={{opacity: 0}}
			>
				<h1
					style={{
						fontFamily,
						fontSize,
						color,
						fontWeight: 'bold',
						margin: 0,
						marginTop,
						marginRight,
					}}
				>
					{title}
				</h1>
			</Animated>
		</AbsoluteFill>
	);
};
