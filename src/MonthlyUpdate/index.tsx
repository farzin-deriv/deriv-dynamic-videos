import {AbsoluteFill} from 'remotion';
import colors from '../colors';
import {useData} from '../hooks';
import {RoadMapSequence} from './RoadMapSequence';
import {StarOfMonthIntroSequence} from './StarOfMonthIntroSequence';
import {StarsOfMonthSequence} from './StarsOfMonthSequence';
import {WeeklyUpdateIntroSequence} from './WeeklyUpdateIntroSequence';
import {WeeksUpdateSequence} from './WeeksUpdateSequence';

export const MonthlyUpdate: React.FC<ReturnType<typeof useData>> = ({
	stars,
	weeks,
	roads,
}) => {
	const delay1 = 0;
	const delay2 = delay1 + WeeklyUpdateIntroSequence.duration;
	const delay3 = delay2 + weeks.duration;
	const delay4 = delay3 + roads.duration;
	const delay5 = delay4 + StarOfMonthIntroSequence.duration;

	return (
		<AbsoluteFill
			style={{backgroundColor: colors.background, overflow: 'hidden'}}
		>
			<WeeklyUpdateIntroSequence delay={delay1} />
			<WeeksUpdateSequence delay={delay2} data={weeks} />
			<RoadMapSequence delay={delay3} data={roads} />
			<StarOfMonthIntroSequence delay={delay4} />
			<StarsOfMonthSequence delay={delay5} data={stars} />
		</AbsoluteFill>
	);
};
