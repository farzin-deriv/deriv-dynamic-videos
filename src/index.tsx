import {Composition, registerRoot} from 'remotion';
import {StarOfMonth} from './StarOfMonth';

export const RemotionRoot: React.FC = () => {
	const size = 512;

	return (
		<>
			<Composition
				id="StarOfMonth"
				component={StarOfMonth}
				durationInFrames={500}
				fps={60}
				width={size}
				height={size}
				defaultProps={{
					name: 'John Doe',
					image:
						'https://st.depositphotos.com/1597387/1984/i/600/depositphotos_19841901-stock-photo-asian-young-business-man-close.jpg',
					achievements:
						'Achievement A | Achievement B | Achievement C | Achievement D | Achievement E | Achievement F',
				}}
			/>
		</>
	);
};

registerRoot(RemotionRoot);
