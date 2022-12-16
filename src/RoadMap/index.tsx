import {AbsoluteFill, Sequence} from 'remotion';
import {Background} from './Background';
import {Department} from './Department';
import {Description} from './Description';
import {HeroTitle} from './HeroTitle';
import {Title} from './Title';

export const RoadMap: React.FC<{items: string}> = ({items}) => {
	return (
		<AbsoluteFill style={{backgroundColor: '#0e0e0e', overflow: 'hidden'}}>
			<Sequence>
				<Background />
			</Sequence>
			<Sequence>
				<HeroTitle />
			</Sequence>
			<Sequence>
				<Department />
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
