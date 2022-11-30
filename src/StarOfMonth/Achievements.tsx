import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
const {fontFamily} = loadFont();

export const Achievements: React.FC<{
	achievements: string;
	fontSizeFactor?: number;
}> = ({achievements, fontSizeFactor = 1}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	return (
		<p
			style={{
				fontFamily,
				fontSize: videoConfig.width / 25 / fontSizeFactor,
				color: '#ffffff',
				position: 'absolute',
				bottom: 0,
			}}
		>
			{achievements.split('|').map((achievement, index) => {
				const delay = index * 25;

				const translation = interpolate(
					spring({
						frame: frame - delay,
						fps: videoConfig.fps,
						config: {damping: 100},
					}),
					[0, 1],
					[-100, 0]
				);

				const opacity = interpolate(frame - delay, [0, 30], [0, 1], {
					extrapolateLeft: 'clamp',
					extrapolateRight: 'clamp',
				});

				return (
					<span
						key={achievement.trim()}
						style={{
							width: '100%',
							marginLeft: 10,
							marginRight: 10,
							display: 'inline-block',
							transform: `translateX(${translation}%)`,
							opacity,
						}}
					>
						- {achievement.trim()}
					</span>
				);
			})}
		</p>
	);
};
