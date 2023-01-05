import {AbsoluteFill, Sequence} from 'remotion';
import colors from '../colors';
import {FadeTransition, TitleTransition} from '../transitions';
import {Background} from './Background';
import mock from './mock.json';
import {Point} from './Point';

// Const duration = 600;
const duration = 230 + 220 * 10;

export const RoadMap: TSequence<{items: string}> = ({items}) => {
	const data: string[] = JSON.parse(items);

	return (
		<AbsoluteFill style={{backgroundColor: '#0e0e0e', overflow: 'hidden'}}>
			<Sequence>
				<Background />
			</Sequence>
			<Sequence durationInFrames={200}>
				<FadeTransition
					duration={200}
					color={colors.primary}
					hasFadeOut={false}
					hasFadeIn={false}
				>
					<TitleTransition duration={200} title="Roads Ahead" />
				</FadeTransition>
			</Sequence>
			{/* <Sequence>
				<Title />
			</Sequence>
			<Sequence>
				<Description items={data} />
			</Sequence> */}
			{data.map((item, index) => (
				<Sequence from={220 * (index + 1)} durationInFrames={410}>
					<Point
						name={item}
						index={index + 1}
						isLast={index === data.length - 1}
					/>
				</Sequence>
			))}
		</AbsoluteFill>
	);
};

RoadMap.duration = duration;
RoadMap.mock = mock;
