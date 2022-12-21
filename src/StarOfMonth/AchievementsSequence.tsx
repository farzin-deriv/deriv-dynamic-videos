import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {Sequence, useVideoConfig} from 'remotion';
import colors from '../colors';
import {FadeTransition, MoveTransition} from '../transitions';
const {fontFamily} = loadFont();

export const AchievementsSequence: React.FC<{
	delay?: number;
	achievements: string[];
	fontSizeFactor?: number;
}> = ({delay, achievements, fontSizeFactor = 1}) => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 25 / fontSizeFactor;

	return (
		<Sequence name="Achievements" from={delay}>
			<p
				style={{
					fontFamily,
					fontSize,
					color: colors.text,
					position: 'absolute',
					bottom: 0,
				}}
			>
				{achievements.map((achievement, index) => {
					const delay = index * 25;

					return (
						<FadeTransition
							key={index}
							absolute={false}
							delay={delay}
							hasFadeOut={false}
						>
							<MoveTransition
								absolute={false}
								initialX={-videoConfig.width}
								x={0}
								delay={delay}
							>
								<span
									style={{
										width: '100%',
										marginLeft: 10,
										marginRight: 10,
										display: 'inline-block',
									}}
								>
									- {achievement.trim()}
								</span>
							</MoveTransition>
						</FadeTransition>
					);
				})}
			</p>
		</Sequence>
	);
};
