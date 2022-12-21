import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {Sequence, useVideoConfig} from 'remotion';
import colors from '../colors';
import {ScaleTransition} from '../transitions';
const {fontFamily} = loadFont();

export const NameSequence: React.FC<{
	name: string;
	fontSizeFactor?: number;
}> = ({name, fontSizeFactor = 1}) => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 8 / fontSizeFactor;
	const words = name.trim().split(' ');

	return (
		<Sequence name="Name">
			<h1
				style={{
					fontFamily,
					fontSize,
					fontWeight: 'bold',
					color: colors.text,
				}}
			>
				{words.map((word, index) => (
					<ScaleTransition key={index} absolute={false} delay={index * 5}>
						<span
							style={{
								marginLeft: 10,
								marginRight: 10,
								display: 'inline-block',
							}}
						>
							{word}
						</span>
					</ScaleTransition>
				))}
			</h1>
		</Sequence>
	);
};
