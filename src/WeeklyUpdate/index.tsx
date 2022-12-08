import {AbsoluteFill, Sequence} from 'remotion';
import {Background} from './Background';
import {Date} from './Date';
import {Description} from './Description';
import {Title} from './Title';
import {WeekNumber} from './WeekNumber';

type TData = {
	week: number;
	date: string;
	challenges: React.ComponentProps<typeof Description>['items'];
	accomplishment: React.ComponentProps<typeof Description>['items'];
};

export const WeeklyUpdate: React.FC<{data: TData}> = ({data}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#0e0e0e', overflow: 'hidden'}}>
			<Sequence>
				<Background />
			</Sequence>
			<Sequence>
				<WeekNumber week={data.week} />
			</Sequence>
			<Sequence>
				<Date date={data.date} />
			</Sequence>
			<Sequence>
				<Title title="Accomplishment" />
			</Sequence>
			<Sequence>
				<Description items={data.accomplishment} />
			</Sequence>
			<Sequence from={300}>
				<Title title="Challenges" />
			</Sequence>
			<Sequence from={300}>
				<Description items={data.challenges} />
			</Sequence>
		</AbsoluteFill>
	);
};
