import {Img, Sequence, useVideoConfig} from 'remotion';
import {MoveTransition} from '../transitions';

export const ImageSequence: React.FC<{image: string}> = ({image}) => {
	const videoConfig = useVideoConfig();

	return (
		<Sequence name="Image">
			<MoveTransition y={-videoConfig.height / 8} delay={40}>
				<Img
					src={image}
					style={{
						objectFit: 'cover',
						height: '100%',
						width: '100%',
						opacity: 0.2,
					}}
				/>
			</MoveTransition>
		</Sequence>
	);
};
