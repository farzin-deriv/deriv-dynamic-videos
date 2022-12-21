import {Sequence, useVideoConfig} from 'remotion';
import colors from '../colors';
import {MoveTransition} from '../transitions';

export const BottomOverlaySequence: React.FC<{
	delay?: number;
	fontSizeFactor?: number;
}> = ({delay, fontSizeFactor = 1}) => {
	const videoConfig = useVideoConfig();

	return (
		<Sequence name="Overlay" from={delay}>
			<MoveTransition y={-(videoConfig.height / (fontSizeFactor * 2))}>
				<div
					style={{
						position: 'absolute',
						backgroundColor: colors.primary,
						width: '200%',
						height: '50%',
						rotate: '10deg',
						bottom: '-60%',
					}}
				/>
			</MoveTransition>
		</Sequence>
	);
};
