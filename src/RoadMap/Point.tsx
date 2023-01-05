import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import colors from '../colors';
import {FadeTransition, MoveTransition, ScaleTransition} from '../transitions';

const {fontFamily} = loadFont();

export const Point: React.FC<{
	name: string;
	index: number;
	delay?: number;
	isLast?: boolean;
}> = ({name, index, delay = 0, isLast = false}) => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 22;

	return (
		<MoveTransition delay={delay + 170} x={-videoConfig.width}>
			<MoveTransition delay={delay + 390} x={-videoConfig.width}>
				<AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
					{!isLast && (
						<FadeTransition
							delay={delay + 160}
							hasFadeOut={false}
							duration={150}
						>
							<div
								style={{
									marginLeft: 5,
									position: 'absolute',
									width: '100%',
									height: 1,
									borderBottom: `10px dashed ${colors.text}`,
									opacity: 0.5,
									rotate: '0deg',
									top: '50%',
									left: '50%',
									transformOrigin: 'top left',
								}}
							/>
						</FadeTransition>
					)}
					<ScaleTransition delay={delay}>
						<div
							style={{
								backgroundColor: colors.text,
								width: 100,
								height: 100,
								borderRadius: 100,
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex',
							}}
						>
							<h1
								style={{
									fontFamily,
									fontSize,
									color: colors.primary,
								}}
							>
								{index}
							</h1>
						</div>
					</ScaleTransition>
					<MoveTransition delay={delay + 20} y={50} duration={150}>
						<FadeTransition delay={delay + 30} duration={150 - 20}>
							<MoveTransition delay={delay + 150} y={-50} duration={150}>
								<h1
									style={{
										fontFamily,
										fontSize,
										color: colors.text,
										textAlign: 'center',
										margin: 12,
										position: 'absolute',
										top: '50%',
									}}
								>
									{name}
								</h1>
							</MoveTransition>
						</FadeTransition>
					</MoveTransition>
				</AbsoluteFill>
			</MoveTransition>
		</MoveTransition>
	);
};
