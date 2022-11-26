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
					name: 'Mohsen Hajibeigloo',
					image:
						'https://ca.slack-edge.com/T0D277EE5-U0368QUK0AE-f07f41cec867-512',
					achievements:
						"Rightful heir to the Throne of La La Land [Right to left translations]\nHas taken mentorship program to a whole new level\nPlays Beethoven's creation in one hand, while the other one is writing code",
				}}
			/>
		</>
	);
};

registerRoot(RemotionRoot);
