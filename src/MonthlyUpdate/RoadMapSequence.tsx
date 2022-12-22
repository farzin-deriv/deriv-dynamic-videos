import {AbsoluteFill, Sequence} from 'remotion';
import {RoadMap} from '../RoadMap';

const {duration} = RoadMap;

export const RoadMapSequence: TSequence<{roads: string}> = ({delay, roads}) => (
	<AbsoluteFill>
		<Sequence name="" from={delay} durationInFrames={duration}>
			<RoadMap items={roads} />
		</Sequence>
	</AbsoluteFill>
);

RoadMapSequence.duration = duration;
