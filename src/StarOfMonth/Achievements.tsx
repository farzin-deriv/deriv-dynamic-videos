import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
const {fontFamily} = loadFont();

export const Achievements: React.FC<{achievements: string[]}> = ({
	achievements,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<p
			style={{
				fontFamily,
				fontSize: 16,
				fontWeight: 'lighter',
				color: '#ffffff',
				position: 'absolute',
				bottom: 0,
			}}
		>
			{achievements.map((achievement, index) => {
				const delay = index * 25;

				const translation = interpolate(
					spring({
						frame: frame - delay,
						fps,
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
						key={achievement}
						style={{
							marginLeft: 10,
							marginRight: 10,
							display: 'inline-block',
							transform: `translateX(${translation}%)`,
							opacity,
						}}
					>
						- {achievement}
					</span>
				);
			})}
		</p>
	);
};
