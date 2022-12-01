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
					image:
						'https://img.freepik.com/premium-photo/cheeky-young-outgoing-handsome-bearded-man-enjoying-awesome-party-inviting-come-checkout-event-pointing-left-recommend-visit-corporate-site-showing-banner-smiling-amused-white-background_176420-55530.jpg?w=2000',
					achievements:
						'Lorem ipsum consectetur adipiscing elit | Sed do eiusmod tempor incididunt | Vulputate dignissim suspendisse | Lobortis scelerisque fermentum duiD | Vitae suscipit tellus mauris a diam maecenas',
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
								'https://thumbs.dreamstime.com/b/keep-our-secret-portait-mysterious-cheeky-bearded-guy-squinting-tricky-smiling-as-showing-shh-gesture-index-finger-133306691.jpg',
							achievements:
								'Lorem ipsum consectetur adipiscing elit | Sed do eiusmod tempor incididunt | Vulputate dignissim suspendisse | Lobortis scelerisque fermentum duiD | Vitae suscipit tellus mauris a diam maecenas',
						},
						{
							name: 'Christian Medina',
							image:
								'https://media.istockphoto.com/id/1132932216/photo/close-up-photo-beautiful-amazing-she-her-dark-skin-lady-arm-hand-rock-fan-concert-metal-music.jpg?s=612x612&w=0&k=20&c=ez202gu0hRJi3jJvWFWk6_fT5aYjiQ-43fxaL-vMLfU=',
							achievements:
								'Vulputate dignissim suspendisse | Lobortis scelerisque fermentum duiD | Lorem ipsum consectetur adipiscing elit | Sed do eiusmod tempor incididunt | Vitae suscipit tellus mauris a diam maecenas',
						},
						{
							name: 'Prudence Knowles',
							image:
								'https://thumbs.dreamstime.com/b/close-up-photo-amazing-beautiful-her-lady-hands-palms-fingers-point-i-love-myself-i-best-crazy-blinking-wearing-red-knitted-139288025.jpg',
							achievements:
								'Sed do eiusmod tempor incididunt | Vulputate dignissim suspendisse | Vitae suscipit tellus mauris a diam maecenas | Lorem ipsum consectetur adipiscing elit | Lobortis scelerisque fermentum duiD',
						},
						{
							name: 'Stephen Maldonado',
							image:
								'https://thumbs.dreamstime.com/b/man-shocked-to-see-something-his-side-excited-gesture-copy-space-portrait-young-asian-surprised-smiling-indonesian-158606032.jpg',
							achievements:
								'Sed do eiusmod tempor incididunt | Lorem ipsum consectetur adipiscing elit | Vulputate dignissim suspendisse | Vitae suscipit tellus mauris a diam maecenas | Lobortis scelerisque fermentum duiD',
						},
					],
				}}
			/>
		</>
	);
};

registerRoot(RemotionRoot);
