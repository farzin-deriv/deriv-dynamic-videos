import {AbsoluteFill, Sequence} from 'remotion';
import {useWeeksData} from '../hooks';
import {WeeklyUpdate} from '../WeeklyUpdate';

export const WeeksUpdateSequence: React.FC<{
	delay?: number;
	data: ReturnType<typeof useWeeksData>;
}> = ({delay, data}) => (
	<AbsoluteFill>
		{data.weeks.map((week, index) => {
			const from =
				(delay || 0) +
				data.weeks
					.slice(0, index)
					.reduce((total, week) => total + week.duration, 0);

			return (
				<Sequence
					key={index}
					name={`Week #${week.week} update`}
					from={from}
					durationInFrames={week.duration}
				>
					<WeeklyUpdate
						week={week.week}
						accomplishments={JSON.stringify(week.accomplishments)}
						challenges={JSON.stringify(week.challenges)}
					/>
				</Sequence>
			);
		})}
	</AbsoluteFill>
);
