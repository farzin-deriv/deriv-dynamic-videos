import {Composition, registerRoot} from 'remotion';
import {StarOfMonth} from './StarOfMonth';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="StarOfMonth"
				component={StarOfMonth}
				durationInFrames={300}
				fps={60}
				width={400}
				height={400}
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
