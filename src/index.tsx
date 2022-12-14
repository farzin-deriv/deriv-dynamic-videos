import {Composition, registerRoot} from 'remotion';
import {StarOfMonth} from './StarOfMonth';
import StarOfMonthMock from './StarOfMonth/mock.json';
import {StarOfMonthGrid} from './StarOfMonthGrid';
import StarOfMonthGridMock from './StarOfMonthGrid/mock.json';
import {WeeklyUpdate} from './WeeklyUpdate';

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
				defaultProps={StarOfMonthMock}
			/>
			<Composition
				id="StarOfMonthGrid"
				component={StarOfMonthGrid}
				durationInFrames={500}
				fps={60}
				width={size * 2}
				height={size * 2}
				defaultProps={StarOfMonthGridMock}
			/>
			<Composition
				id="WeeklyUpdate"
				component={WeeklyUpdate}
				durationInFrames={900}
				fps={60}
				width={size}
				height={size}
				defaultProps={{
					data: {
						week: 3,
						date: 'December 2022',
						accomplishment: [
							{
								title: 'Deriv-app',
								description: 'Rename MT5 Synthetics to Derived',
							},
							{
								title: 'Deriv-app',
								description: 'New KYC flow for BVI Clients',
							},
							{
								title: 'Product API',
								description: 'Documentation Revamp',
							},
							{
								title: 'deriv.com',
								description:
									'Implemented translation Extraction Key to improve overall performance and get rid of translation key duplications',
							},
							{
								title: 'Release Process Automation',
								description:
									'Fixed release flow problem of merging release tag and hotfixes',
							},
						],
						challenges: [
							{
								title: 'Deriv-app',
								description: 'Trading Assessment for MF clients blocked by BE',
							},
							{
								title: 'Deriv-app',
								description:
									'Mobx migration causing issues in various packages',
							},
							{
								title: 'Deriv.com',
								description:
									'Found more than 600 issues on the project TS files',
							},
							{
								title: 'Release Process Automation',
								description:
									'New release flow has a problem with the hotfixes when a Release Tag is ongoing',
							},
						],
					},
				}}
			/>
		</>
	);
};

registerRoot(RemotionRoot);
