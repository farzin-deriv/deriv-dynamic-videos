import {Animated, Scale} from 'remotion-animated';

type TOptions = {
	to?: number;
};

export const ScaleTransition: TTransition<TOptions> = ({
	children,
	delay = 0,
	absolute = true,
	to = 1,
}) => {
	return (
		<Animated
			absolute={absolute}
			delay={delay}
			animations={[Scale({by: to, initial: 0, damping: 200})]}
			style={{transform: 'scale(0)'}}
		>
			{children}
		</Animated>
	);
};
