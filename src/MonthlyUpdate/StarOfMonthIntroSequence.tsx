import {Sequence} from 'remotion';
import colors from '../colors';
import {FadeTransition, TitleTransition} from '../transitions';

const duration = 200;

export const StarOfMonthIntroSequence: TSequence = ({delay}) => (
	<Sequence
		name="Stars of the month intro"
		from={delay}
		durationInFrames={duration}
	>
		<FadeTransition
			duration={duration}
			color={colors.primary}
			hasFadeIn={false}
		>
			<TitleTransition
				duration={duration}
				title="Stars"
				subtitle="of the month"
			/>
		</FadeTransition>
	</Sequence>
);

StarOfMonthIntroSequence.duration = duration;
