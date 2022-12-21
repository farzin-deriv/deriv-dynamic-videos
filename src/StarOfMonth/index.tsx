import {AbsoluteFill} from 'remotion';
import colors from '../colors';
import {FadeTransition} from '../transitions';
import {AchievementsSequence} from './AchievementsSequence';
import {BottomOverlaySequence} from './BottomOverlaySequence';
import {ImageSequence} from './ImageSequence';
import {NameSequence} from './NameSequence';

const duration = 500;

export const StarOfMonth: TSequence<{
	name: string;
	image: string;
	achievements: string;
	fontSizeFactor?: number;
}> = ({name, image, achievements, fontSizeFactor = 1}) => {
	return (
		<AbsoluteFill
			style={{backgroundColor: colors.background, overflow: 'hidden'}}
		>
			<FadeTransition duration={duration} color={colors.background}>
				<ImageSequence image={image} />
				<NameSequence name={name} fontSizeFactor={fontSizeFactor} />
				<BottomOverlaySequence delay={25} fontSizeFactor={fontSizeFactor} />
				<AchievementsSequence
					delay={80}
					achievements={JSON.parse(achievements)}
					fontSizeFactor={fontSizeFactor}
				/>
			</FadeTransition>
		</AbsoluteFill>
	);
};

StarOfMonth.duration = duration;
