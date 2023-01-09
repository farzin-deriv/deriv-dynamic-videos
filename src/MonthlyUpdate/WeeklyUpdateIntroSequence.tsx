import {Sequence} from 'remotion';
import colors from '../colors';
import {FadeTransition, TitleTransition} from '../transitions';

const duration = 200;

export const WeeklyUpdateIntroSequence: TSequence<{date: string}> = ({
	date,
	delay,
}) => (
	<Sequence
		name="Weekly updates intro"
		from={delay}
		durationInFrames={duration}
	>
		<FadeTransition
			duration={duration}
			color={colors.primary}
			hasFadeOut={false}
		>
			<TitleTransition
				duration={duration}
				title="Monthly Updates"
				subtitle={date.charAt(0).toUpperCase() + date.slice(1)}
			/>
		</FadeTransition>
	</Sequence>
);

WeeklyUpdateIntroSequence.duration = duration;
