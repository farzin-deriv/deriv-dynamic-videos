import {Composition, registerRoot} from 'remotion';
import {RoadMap} from './RoadMap';
import RoadMapMock from './RoadMap/mock.json';
import {StarOfMonth} from './StarOfMonth';
import StarOfMonthMock from './StarOfMonth/mock.json';
import {StarOfMonthGrid} from './StarOfMonthGrid';
import StarOfMonthGridMock from './StarOfMonthGrid/mock.json';
import {WeeklyUpdate} from './WeeklyUpdate';
import WeeklyUpdateMock from './WeeklyUpdate/mock.json';

export const RemotionRoot: React.FC = () => {
	const size = 1024;

	return (
		<>
			<Composition
				id="StarOfMonth"
				component={StarOfMonth}
				durationInFrames={500}
				fps={60}
				width={size}
				height={size}
				defaultProps={StarOfMonthMock}
			/>
			<Composition
				id="StarOfMonthGrid"
				component={StarOfMonthGrid}
				durationInFrames={500}
				fps={60}
				width={size * 2}
				height={size * 2}
				defaultProps={StarOfMonthGridMock}
			/>
			<Composition
				id="WeeklyUpdate"
				component={WeeklyUpdate}
				durationInFrames={900}
				fps={60}
				width={size}
				height={size}
				defaultProps={WeeklyUpdateMock}
			/>
			<Composition
				id="RoadMap"
				component={RoadMap}
				durationInFrames={540}
				fps={60}
				width={size}
				height={size}
				defaultProps={RoadMapMock}
			/>
		</>
	);
};

registerRoot(RemotionRoot);
