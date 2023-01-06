import React from 'react';
import {Composition, getInputProps} from 'remotion';
import {useData} from '../hooks';
import {MonthlyUpdate} from './';
import mock from './mock.json';

const inputs = getInputProps();
const inputData: typeof mock = Object.keys(inputs).length === 0 ? mock : inputs;

export const MonthlyUpdateComposition: React.FC<{size: number}> = ({size}) => {
	const data = useData(JSON.stringify(inputData));

	return (
		<Composition
			id={MonthlyUpdate.name}
			component={MonthlyUpdate}
			durationInFrames={data.duration}
			defaultProps={data}
			fps={60}
			width={size}
			height={size}
		/>
	);
};
