import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Animated, Fade, Move, Scale} from 'remotion-animated';

const {fontFamily} = loadFont();

type TItem = {
	title: string;
	description: string;
};

export const Description: React.FC<{items: TItem[]}> = ({items}) => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 24;
	const marginBottom = fontSize / 3;
	const marginLeft = marginBottom * 1.5;
	const color = '#ffffff';
	const duration = 75;
	const startDelay = 220;
	const endDelay = startDelay + 50;
	const offset = videoConfig.width;

	const grouped = groupBy(items, (item) => item.title);
	const titles = Object.keys(grouped);

	return (
		<AbsoluteFill style={{justifyContent: 'flex-end'}}>
			<Animated
				delay={startDelay}
				animations={[
					Fade({to: 1, initial: 0, duration}),
					Move({x: 0, initialX: -offset}),
					Move({x: -50, y: 50, start: endDelay}),
					Fade({to: 0, start: endDelay}),
					Scale({by: 0, start: endDelay, mass: 75}),
				]}
				style={{opacity: 0}}
			>
				<p
					style={{
						fontFamily,
						fontSize,
						color,
						margin: 0,
						marginBottom,
						marginLeft,
					}}
				>
					{titles.map((title) => {
						const descriptions = grouped[title].map((item) => (
							<p
								style={{margin: 0, fontSize: fontSize - 2}}
							>{`- ${item.description}`}</p>
						));

						return (
							<>
								<p
									style={{fontWeight: 'bold', margin: 0, marginTop: 12}}
								>{`${title}`}</p>
								{descriptions}
							</>
						);
					})}
				</p>
			</Animated>
		</AbsoluteFill>
	);
};

const groupBy = <T,>(arr: T[], fn: (item: T) => string) => {
	return arr.reduce<Record<string, T[]>>((prev, curr) => {
		const groupKey = fn(curr);
		const group = prev[groupKey] || [];
		group.push(curr);

		return {...prev, [groupKey]: group};
	}, {});
};
