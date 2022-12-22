import {AbsoluteFill, Sequence} from 'remotion';
import {StarOfMonth} from '../StarOfMonth';

const {duration} = StarOfMonth;

export const StarsOfMonthSequence: TSequence<{
	stars: React.ComponentProps<typeof StarOfMonth>[];
}> = ({delay, stars}) => {
	return (
		<AbsoluteFill>
			{stars.map((star, index) => (
				<Sequence
					key={index}
					name={`Star: ${star.name}`}
					from={(delay || 0) + index * duration}
					durationInFrames={duration}
				>
					<StarOfMonth
						name={star.name}
						image={star.image}
						achievements={JSON.stringify(star.achievements)}
					/>
				</Sequence>
			))}
		</AbsoluteFill>
	);
};

StarsOfMonthSequence.duration = duration;
