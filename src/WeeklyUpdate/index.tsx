import {AbsoluteFill, Sequence} from 'remotion';
import {Background} from './Background';
import {Date} from './Date';
import {Description} from './Description';
import {Title} from './Title';
import {WeekNumber} from './WeekNumber';

type TData = {
	week: number;
	date: string;
	challenges: string;
	accomplishments: string;
};

export const WeeklyUpdate: React.FC<TData> = ({
	week,
	date,
	accomplishments,
	challenges,
}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#0e0e0e', overflow: 'hidden'}}>
			<Sequence>
				<Background />
			</Sequence>
			<Sequence>
				<WeekNumber week={week} />
			</Sequence>
			<Sequence>
				<Date date={date} />
			</Sequence>
			<Sequence>
				<Title title="Accomplishments" />
			</Sequence>
			<Sequence>
				<Description items={JSON.parse(accomplishments)} />
			</Sequence>
			<Sequence from={300}>
				<Title title="Challenges" />
			</Sequence>
			<Sequence from={300}>
				<Description items={JSON.parse(challenges)} />
			</Sequence>
		</AbsoluteFill>
	);
};
