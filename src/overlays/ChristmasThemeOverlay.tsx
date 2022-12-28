import React from 'react';
import {Freeze, Img, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {FadeTransition} from '../transitions';

const speedFactor = 3;
const frameCount = 159 * speedFactor;

export const ChristmasThemeOverlay: React.FC<{visible?: boolean}> = ({
	visible = true,
}) => {
	const videoConfig = useVideoConfig();
	const loop = Math.ceil(videoConfig.durationInFrames / frameCount);

	if (!visible) return <></>;

	return (
		<Sequence name="Christmas theme">
			{Array(loop)
				.fill(true)
				.map((_, index) => (
					<Sequence
						showInTimeline={false}
						from={index * (frameCount - 50)}
						durationInFrames={frameCount}
					>
						<SnowContainer>
							<Snow />
						</SnowContainer>
					</Sequence>
				))}
		</Sequence>
	);
};

export const SnowContainer: React.FC<React.PropsWithChildren> = ({
	children,
}) => {
	const frame = useCurrentFrame();

	return <Freeze frame={frame / speedFactor}>{children}</Freeze>;
};

export const Snow: React.FC = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const img = String(Math.ceil(frame)).padStart(3, '0');

	return (
		<FadeTransition duration={frameCount / speedFactor}>
			<Img
				src={require(`./snow/frame_${img}_delay-0.05s.gif`)}
				style={{
					width: videoConfig.width,
					height: videoConfig.height,
					opacity: 0.5,
				}}
			/>
		</FadeTransition>
	);
};
