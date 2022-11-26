import {Sequence} from 'remotion';
import {Achievements} from './Achievements';
import {BottomOverlay} from './BottomOverlay';
import {Container} from './Container';
import {Image} from './Image';
import {Title} from './Title';

export const StarOfMonth: React.FC<{
	name: string;
	image: string;
	achievements: string[];
}> = ({name, image, achievements}) => {
	return (
		<Container>
			<Sequence>
				<Image image={image} />
			</Sequence>
			<Sequence>
				<Title name={name} />
			</Sequence>
			<Sequence>
				<BottomOverlay />
			</Sequence>
			<Sequence from={80}>
				<Achievements achievements={achievements} />
			</Sequence>
		</Container>
	);
};
