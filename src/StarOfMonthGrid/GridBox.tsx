import React from 'react';
import {useVideoConfig} from 'remotion';

export const GridBox: React.FC<
	React.PropsWithChildren<{boxFactor?: number}>
> = ({children, boxFactor = 1}) => {
	const videoConfig = useVideoConfig();

	return (
		<div
			style={{
				display: 'flex',
				position: 'relative',
				overflow: 'hidden',
				border: '1px solid #0e0e0e',
				height: videoConfig.width / boxFactor,
				width: videoConfig.width / boxFactor,
			}}
		>
			{children}
		</div>
	);
};
