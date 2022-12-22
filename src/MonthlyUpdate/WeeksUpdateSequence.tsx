import {AbsoluteFill, Sequence} from 'remotion';
import {WeeklyUpdate} from '../WeeklyUpdate';

const {duration} = WeeklyUpdate;

export const WeeksUpdateSequence: TSequence<{
	weeks: React.ComponentProps<typeof WeeklyUpdate>[];
}> = ({delay, weeks}) => (
	<AbsoluteFill>
		{weeks.map((week, index) => (
			<Sequence
				key={index}
				name={`Week #${week.week} update`}
				from={(delay || 0) + index * duration}
				durationInFrames={duration}
			>
				<WeeklyUpdate
					week={week.week}
					date={week.date}
					accomplishments={JSON.stringify(week.accomplishments)}
					challenges={JSON.stringify(week.challenges)}
				/>
			</Sequence>
		))}
	</AbsoluteFill>
);

WeeksUpdateSequence.duration = duration;
