import React from 'react';
import {AbsoluteFill} from 'remotion';
import colors from '../colors';
import {StarOfMonth} from '../StarOfMonth';
import {GridBox} from './GridBox';
import mock from './mock.json';

export const StarOfMonthGrid: TSequence<{stars: string}> = ({stars}) => {
	const data: React.ComponentProps<typeof StarOfMonth>[] = JSON.parse(stars);
	const factor = Math.ceil(Math.sqrt(data.length));

	return (
		<AbsoluteFill style={{backgroundColor: colors.background}}>
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
				{data.map((star, index) => (
					<GridBox key={index} boxFactor={factor}>
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

StarOfMonthGrid.duration = StarOfMonth.duration;
StarOfMonthGrid.mock = mock;
