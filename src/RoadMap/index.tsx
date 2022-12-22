import {AbsoluteFill, Sequence} from 'remotion';
import colors from '../colors';
import {FadeTransition, TitleTransition} from '../transitions';
import {Background} from './Background';
import {Description} from './Description';
import mock from './mock.json';
import {Title} from './Title';

const duration = 600;

export const RoadMap: TSequence<{items: string}> = ({items}) => {
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
			<Sequence>
				<Title />
			</Sequence>
			<Sequence>
				<Description items={JSON.parse(items)} />
			</Sequence>
		</AbsoluteFill>
	);
};

RoadMap.duration = duration;
RoadMap.mock = mock;
