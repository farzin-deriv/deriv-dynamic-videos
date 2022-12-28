import {loadFont} from '@remotion/google-fonts/IBMPlexSans';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import {Animated, Move, Scale} from 'remotion-animated';
import colors from '../colors';
import {ChristmasThemeOverlay} from '../overlays';
import {FadeTransition} from './FadeTransition';

const {fontFamily} = loadFont();

export const TitleTransition: React.FC<{
	duration: number;
	title: string;
	subtitle?: string;
}> = ({duration, title, subtitle}) => {
	const videoConfig = useVideoConfig();
	const fontSize = videoConfig.width / 6;
	const offset = videoConfig.height / 16;
	const subtitleDelay = 80;
	const endDelay = duration - 110;

	const renderTitle = () => (
		<FadeTransition duration={duration - 10}>
			<Animated
				animations={[
					Scale({by: 1, initial: 10, duration: 30}),
					Move({y: subtitle ? -offset : 0, start: subtitleDelay}),
					Scale({by: 0, start: subtitleDelay + endDelay, mass: 75}),
				]}
			>
				<h1
					style={{
						fontFamily,
						fontSize,
						color: colors.text,
						fontWeight: 'bold',
						textAlign: 'center',
					}}
				>
					{title}
				</h1>
			</Animated>
			<ChristmasThemeOverlay />
		</FadeTransition>
	);

	const renderSubtitle = () => (
		<FadeTransition
			delay={subtitleDelay}
			duration={duration - subtitleDelay - 10}
		>
			<Animated
				delay={subtitleDelay}
				animations={[
					Move({y: offset}),
					Scale({by: 0, start: endDelay, mass: 75}),
				]}
			>
				<p style={{fontFamily, fontSize: fontSize / 4, color: colors.text}}>
					{subtitle}
				</p>
			</Animated>
		</FadeTransition>
	);

	return (
		<AbsoluteFill style={{paddingTop: subtitle ? fontSize / 4 : 0}}>
			{renderTitle()}
			{subtitle && renderSubtitle()}
		</AbsoluteFill>
	);
};
