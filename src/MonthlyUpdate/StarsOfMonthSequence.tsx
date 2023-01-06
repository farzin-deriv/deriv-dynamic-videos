import {AbsoluteFill, Sequence} from 'remotion';
import {useStarsData} from '../hooks';
import {StarOfMonth} from '../StarOfMonth';

export const StarsOfMonthSequence: React.FC<{
	delay?: number;
	data: ReturnType<typeof useStarsData>;
}> = ({delay, data}) => {
	return (
		<AbsoluteFill>
			{data.stars.map((star, index) => {
				const from =
					(delay || 0) +
					data.stars
						.slice(0, index)
						.reduce((total, star) => total + star.duration, 0);

				return (
					<Sequence
						key={index}
						name={`Star: ${star.name}`}
						from={from}
						durationInFrames={star.duration}
					>
						<StarOfMonth
							name={star.name}
							image={star.image}
							achievements={JSON.stringify(star.achievements)}
						/>
					</Sequence>
				);
			})}
		</AbsoluteFill>
	);
};
