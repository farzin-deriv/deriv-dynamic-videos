import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const BottomOverlay: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const translation = interpolate(
		spring({
			frame: frame - 25,
			fps,
			config: {damping: 100},
		}),
		[0, 1],
		[100, 0]
	);

	return (
		<AbsoluteFill
			style={{
				transform: `translateY(${translation}%)`,
				justifyContent: 'flex-end',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					backgroundColor: '#ff444f',
					fontSize: 30,
					color: 'yellow',
					width: '200%',
					height: '50%',
					rotate: '10deg',
					position: 'absolute',
					bottom: '-10%',
				}}
			/>
		</AbsoluteFill>
	);
};
