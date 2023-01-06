import {Composition, registerRoot} from 'remotion';
import {MonthlyUpdateComposition} from './MonthlyUpdate/MonthlyUpdateComposition';
import {RoadMap} from './RoadMap';
import {StarOfMonth} from './StarOfMonth';
import {StarOfMonthGrid} from './StarOfMonthGrid';
import {WeeklyUpdate} from './WeeklyUpdate';

export const RemotionRoot: React.FC = () => {
	const size = 1024;

	return (
		<>
			<MonthlyUpdateComposition size={size} />
			<Composition
				id={StarOfMonth.name}
				component={StarOfMonth}
				durationInFrames={StarOfMonth.duration}
				defaultProps={StarOfMonth.mock}
				fps={60}
				width={size}
				height={size}
			/>
			<Composition
				id={StarOfMonthGrid.name}
				component={StarOfMonthGrid}
				durationInFrames={StarOfMonthGrid.duration}
				defaultProps={StarOfMonthGrid.mock}
				fps={60}
				width={size * 2}
				height={size * 2}
			/>
			<Composition
				id={WeeklyUpdate.name}
				component={WeeklyUpdate}
				durationInFrames={WeeklyUpdate.duration}
				defaultProps={WeeklyUpdate.mock}
				fps={60}
				width={size}
				height={size}
			/>
			<Composition
				id={RoadMap.name}
				component={RoadMap}
				durationInFrames={RoadMap.duration}
				defaultProps={RoadMap.mock}
				fps={60}
				width={size}
				height={size}
			/>
		</>
	);
};

registerRoot(RemotionRoot);
