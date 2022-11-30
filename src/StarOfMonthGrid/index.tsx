import {AbsoluteFill} from 'remotion';
import {StarOfMonth} from '../StarOfMonth';
import {GridBox} from './GridBox';

export const StarOfMonthGrid: React.FC<{
	stars: {
		name: string;
		image: string;
		achievements: string;
	}[];
}> = ({stars}) => {
	const factor = Math.ceil(Math.sqrt(stars.length));

	return (
		<AbsoluteFill style={{backgroundColor: '#0e0e0e'}}>
			<div
				style={{
					display: 'flex',
					flex: 1,
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
				}}
			>
				{stars.map((star) => (
					<GridBox boxFactor={factor}>
						<StarOfMonth
							name={star.name}
							image={star.image}
							achievements={star.achievements}
							fontSizeFactor={factor}
						/>
					</GridBox>
				))}
			</div>
		</AbsoluteFill>
	);
};
