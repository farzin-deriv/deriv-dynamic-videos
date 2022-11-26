import React from 'react';
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Image: React.FC<{image: string}> = ({image}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const translation = interpolate(
		spring({
			frame: frame - 40,
			fps,
			config: {damping: 100},
		}),
		[0, 1],
		[0, -20]
	);

	const opacity = interpolate(frame, [5, 30], [0, 0.2], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{transform: `translateY(${translation}%)`, opacity}}>
			<Img src={image} />
		</AbsoluteFill>
	);
};
