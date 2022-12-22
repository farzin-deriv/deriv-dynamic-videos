import {AbsoluteFill, Sequence} from 'remotion';
import colors from '../colors';
import {FadeTransition, TitleTransition} from '../transitions';
import {Background} from './Background';
import {Description} from './Description';
import mock from './mock.json';
import {TitleSequence} from './TitleSequence';

const duration = 900;

export const WeeklyUpdate: TSequence<{
	week: number;
	date: string;
	challenges: string;
	accomplishments: string;
}> = ({week, date, accomplishments, challenges}) => {
	return (
		<AbsoluteFill
			style={{backgroundColor: colors.background, overflow: 'hidden'}}
		>
			<Sequence>
				<Background />
			</Sequence>
			<FadeTransition duration={200} color={colors.primary}>
				<TitleTransition
					duration={200}
					title={`Week #${week}`}
					subtitle={date}
				/>
			</FadeTransition>
			<TitleSequence delay={250} title="Accomplishments" />
			<Sequence>
				<Description items={JSON.parse(accomplishments)} />
			</Sequence>
			<TitleSequence delay={550} title="Challenges" />
			<Sequence from={300}>
				<Description items={JSON.parse(challenges)} />
			</Sequence>
		</AbsoluteFill>
	);
};

WeeklyUpdate.duration = duration;
WeeklyUpdate.mock = mock;
