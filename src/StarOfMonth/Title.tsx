import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
const {fontFamily} = loadFont();

export const Title: React.FC<{name: string; fontSizeFactor?: number}> = ({
	name,
	fontSizeFactor = 1,
}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const words = name.trim().split(' ');

	return (
		<h1
			style={{
				fontFamily,
				fontSize: videoConfig.width / 8 / fontSizeFactor,
				fontWeight: 'bold',
				color: '#ffffff',
			}}
		>
			{words.map((word, index) => {
				const delay = index * 5;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={word}
						style={{
							marginLeft: 10,
							marginRight: 10,
							display: 'inline-block',
							transform: `scale(${scale})`,
						}}
					>
						{word}
					</span>
				);
			})}
		</h1>
	);
};
