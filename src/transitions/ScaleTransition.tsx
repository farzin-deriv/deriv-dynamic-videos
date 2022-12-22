import {Animated, Scale} from 'remotion-animated';

type TOptions = {
	initial?: number;
	to?: number;
	transformOrigin?: string;
};

export const ScaleTransition: TTransition<TOptions> = ({
	children,
	delay = 0,
	absolute = true,
	initial = 0,
	to = 1,
	transformOrigin,
}) => {
	return (
		<Animated
			absolute={absolute}
			delay={delay}
			animations={[Scale({by: to, initial, damping: 200})]}
			style={{transform: `scale(${initial})`, transformOrigin}}
		>
			{children}
		</Animated>
	);
};
