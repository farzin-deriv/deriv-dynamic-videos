import {AbsoluteFill} from 'remotion';
import colors from '../colors';
import {StarOfMonth} from '../StarOfMonth';
import {WeeklyUpdate} from '../WeeklyUpdate';
import {ChristmasThemeOverlay} from './ChristmasThemeOverlay';
import mock from './mock.json';
import {RoadMapSequence} from './RoadMapSequence';
import {StarOfMonthIntroSequence} from './StarOfMonthIntroSequence';
import {StarsOfMonthSequence} from './StarsOfMonthSequence';
import {WeeklyUpdateIntroSequence} from './WeeklyUpdateIntroSequence';
import {WeeksUpdateSequence} from './WeeksUpdateSequence';

const duration =
	WeeklyUpdateIntroSequence.duration +
	WeeksUpdateSequence.duration * 4 +
	RoadMapSequence.duration +
	StarOfMonthIntroSequence.duration +
	StarsOfMonthSequence.duration * 4;

export const MonthlyUpdate: TSequence<{
	stars: string;
	weeks: string;
	roads: string;
}> = ({stars, weeks, roads}) => {
	const starsData: React.ComponentProps<typeof StarOfMonth>[] =
		JSON.parse(stars);
	const weeksData: React.ComponentProps<typeof WeeklyUpdate>[] =
		JSON.parse(weeks);

	const delay1 = 0;
	const delay2 = delay1 + WeeklyUpdateIntroSequence.duration;
	const delay3 = delay2 + WeeksUpdateSequence.duration * weeksData.length;
	const delay4 = delay3 + RoadMapSequence.duration;
	const delay5 = delay4 + StarOfMonthIntroSequence.duration;

	return (
		<AbsoluteFill
			style={{backgroundColor: colors.background, overflow: 'hidden'}}
		>
			<WeeklyUpdateIntroSequence delay={delay1} />
			<WeeksUpdateSequence weeks={weeksData} delay={delay2} />
			<RoadMapSequence roads={roads} delay={delay3} />
			<StarOfMonthIntroSequence delay={delay4} />
			<StarsOfMonthSequence stars={starsData} delay={delay5} />
			<ChristmasThemeOverlay visible={false} />
		</AbsoluteFill>
	);
};

MonthlyUpdate.duration = duration;
MonthlyUpdate.mock = mock;
