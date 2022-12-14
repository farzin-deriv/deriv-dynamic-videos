module '@remotion/google-fonts/IBMPlexSans' {
	export declare const loadFont: () => {fontFamily: string};
}

type TSequence<T = unknown> = React.FC<T & {delay?: number}> & {
	duration: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	mock?: any;
};

type TTransition<T = unknown> = React.FC<
	React.PropsWithChildren<
		T & {
			duration?: number;
			delay?: number;
			absolute?: boolean;
		}
	>
>;
