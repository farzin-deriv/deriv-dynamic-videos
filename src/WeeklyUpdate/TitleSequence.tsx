import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {Sequence, useVideoConfig} from 'remotion';
import colors from '../colors';
import {FadeTransition, MoveTransition, ScaleTransition} from '../transitions';

const {fontFamily} = loadFont();

export const TitleSequence: React.FC<{delay?: number; title: string}> = ({
	delay,
	title,
}) => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 12;
	const marginTop = fontSize / 3;
	const marginRight = marginTop * 1.5;
	const duration = 280;
	const endDelay = duration - 10;
	const offset = videoConfig.width;

	return (
		<Sequence name={title} from={delay}>
			<FadeTransition duration={duration}>
				<MoveTransition initialX={offset}>
					<MoveTransition delay={endDelay} x={offset}>
						<ScaleTransition
							absolute={false}
							delay={endDelay}
							to={0}
							initial={1}
							transformOrigin="top"
						>
							<h1
								style={{
									width: videoConfig.width,
									height: videoConfig.height,
									textAlign: 'right',
									fontFamily,
									fontSize,
									color: colors.text,
									fontWeight: 'bold',
									margin: 0,
									marginTop,
									marginRight,
								}}
							>
								{title}
							</h1>
						</ScaleTransition>
					</MoveTransition>
				</MoveTransition>
			</FadeTransition>
		</Sequence>
	);
};
