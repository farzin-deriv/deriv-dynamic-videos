import {Animated, Fade} from 'remotion-animated';

type TOptions = {
	hasFadeIn?: boolean;
	hasFadeOut?: boolean;
	color?: string;
};

export const FadeTransition: TTransition<TOptions> = ({
	children,
	duration,
	delay = 0,
	absolute = true,
	hasFadeIn = true,
	hasFadeOut = true,
	color,
}) => (
	<Animated
		absolute={absolute}
		delay={delay}
		animations={[
			Fade({to: 1, initial: hasFadeIn ? 0 : 1}),
			Fade({to: hasFadeOut ? 0 : 1, start: (duration || 20) - 20}),
		]}
		style={{
			display: 'flex',
			width: '100%',
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: color,
			opacity: 0,
		}}
	>
		{children}
	</Animated>
);
