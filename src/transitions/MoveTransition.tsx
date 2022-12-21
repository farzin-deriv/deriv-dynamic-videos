import {Animated, Move} from 'remotion-animated';

type TOptions = {
	x?: number;
	y?: number;
	initialX?: number;
	initialY?: number;
};

export const MoveTransition: TTransition<TOptions> = ({
	children,
	delay = 0,
	absolute = true,
	x = 0,
	y = 0,
	initialX = 0,
	initialY = 0,
}) => {
	return (
		<Animated
			absolute={absolute}
			delay={delay}
			animations={[Move({x, y, initialX, initialY, damping: 100})]}
			style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{children}
		</Animated>
	);
};
