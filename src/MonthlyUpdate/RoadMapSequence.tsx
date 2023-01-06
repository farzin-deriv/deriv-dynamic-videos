import {AbsoluteFill, Sequence} from 'remotion';
import {useRoadsData} from '../hooks';
import {RoadMap} from '../RoadMap';

export const RoadMapSequence: React.FC<{
	delay?: number;
	data: ReturnType<typeof useRoadsData>;
}> = ({delay, data}) => (
	<AbsoluteFill>
		<Sequence name="Roads ahead" from={delay} durationInFrames={data.duration}>
			<RoadMap items={JSON.stringify(data.roads)} />
		</Sequence>
	</AbsoluteFill>
);
