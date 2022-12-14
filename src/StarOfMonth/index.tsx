import {Sequence} from 'remotion';
import {Achievements} from './Achievements';
import {BottomOverlay} from './BottomOverlay';
import {Container} from './Container';
import {Image} from './Image';
import {Title} from './Title';

export const StarOfMonth: React.FC<{
	name: string;
	image: string;
	achievements: string;
	fontSizeFactor?: number;
}> = ({name, image, achievements, fontSizeFactor = 1}) => {
	return (
		<Container>
			<Sequence>
				<Image image={image} />
			</Sequence>
			<Sequence>
				<Title name={name} fontSizeFactor={fontSizeFactor} />
			</Sequence>
			<Sequence>
				<BottomOverlay />
			</Sequence>
			<Sequence from={80}>
				<Achievements
					achievements={JSON.parse(achievements)}
					fontSizeFactor={fontSizeFactor}
				/>
			</Sequence>
		</Container>
	);
};
