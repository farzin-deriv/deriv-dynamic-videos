import React from 'react';
import {AbsoluteFill} from 'remotion';
import {StarOfMonth} from '../StarOfMonth';
import {GridBox} from './GridBox';

export const StarOfMonthGrid: React.FC<{stars: string}> = ({stars}) => {
	const data = JSON.parse(stars);
	const factor = Math.ceil(Math.sqrt(data.length));

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
				{data.map((star: React.ComponentProps<typeof StarOfMonth>) => (
					<GridBox boxFactor={factor}>
						<StarOfMonth
							name={star.name}
							image={star.image}
							achievements={JSON.stringify(star.achievements)}
							fontSizeFactor={factor}
						/>
					</GridBox>
				))}
			</div>
		</AbsoluteFill>
	);
};
