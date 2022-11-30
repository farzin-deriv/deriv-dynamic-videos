import {Composition, registerRoot} from 'remotion';
import {StarOfMonth} from './StarOfMonth';
import {StarOfMonthGrid} from './StarOfMonthGrid';

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
				defaultProps={{
					name: 'Hannibal Hargraves',
					image: 'https://xsgames.co/randomusers/assets/avatars/male/71.jpg',
					achievements:
						'Achievement A | Achievement B | Achievement C | Achievement D | Achievement E | Achievement F',
				}}
			/>
			<Composition
				id="StarOfMonthGrid"
				component={StarOfMonthGrid}
				durationInFrames={500}
				fps={60}
				width={size * 2}
				height={size * 2}
				defaultProps={{
					stars: [
						{
							name: 'Addison Alexander',
							image:
								'https://xsgames.co/randomusers/assets/avatars/male/37.jpg',
							achievements:
								'Achievement A | Achievement B | Achievement C | Achievement D | Achievement E | Achievement F',
						},
						{
							name: 'Christian Medina',
							image:
								'https://xsgames.co/randomusers/assets/avatars/female/56.jpg',
							achievements:
								'Achievement A | Achievement B | Achievement C | Achievement D | Achievement E | Achievement F',
						},
						{
							name: 'Stephen Maldonado',
							image:
								'https://xsgames.co/randomusers/assets/avatars/male/13.jpg',
							achievements:
								'Achievement A | Achievement B | Achievement C | Achievement D | Achievement E | Achievement F',
						},
						{
							name: 'Prudence Knowles							',
							image:
								'https://xsgames.co/randomusers/assets/avatars/female/67.jpg',
							achievements:
								'Achievement A | Achievement B | Achievement C | Achievement D | Achievement E | Achievement F',
						},
					],
				}}
			/>
		</>
	);
};

registerRoot(RemotionRoot);
