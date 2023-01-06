type TWeekData = {
	accomplishments: {description: string; title: string}[];
	challenges: {description: string; title: string}[];
	date: string;
	week: number;
	duration: number;
};

type TRoadData = string[];

type TStarData = {
	achievements: string[];
	image: string;
	name: string;
};

type TWithDuration<T> = T & {duration: number};

type TData = TWithDuration<{
	weeks: TWithDuration<{weeks: TWithDuration<TWeekData>[]}>;
	roads: TWithDuration<{roads: TRoadData}>;
	stars: TWithDuration<{stars: TWithDuration<TStarData>[]}>;
}>;

export const useWeeksData = (data: string): TData['weeks'] => {
	const weeks: TWeekData[] = JSON.parse(data);

	const durationIntro = 250;
	const durationAccomplishments = 325;
	const durationChallenges = 325;

	const weeksData = weeks.map((week) => ({
		...week,
		duration:
			durationIntro +
			(function () {
				let sum = 0;
				week.accomplishments.length > 0 && (sum += durationAccomplishments);
				week.challenges.length > 0 && (sum += durationChallenges);
				return sum;
			})(),
	}));

	return {
		weeks: weeksData,
		duration: weeksData.reduce((total, week) => total + week.duration, 0),
	};
};

export const useRoadsData = (data: string): TData['roads'] => {
	const roads: TRoadData = JSON.parse(data);

	const durationRoadIntro = 200;
	const durationRoad = 222;

	return {
		roads,
		duration: durationRoadIntro + durationRoad * roads.length,
	};
};

export const useStarsData = (data: string): TData['stars'] => {
	const stars: TStarData[] = JSON.parse(data);

	const durationStarIntro = 200;
	const durationStar = 500;

	const starsData = stars.map((star) => ({
		...star,
		duration: durationStar,
	}));

	return {
		stars: starsData,
		duration: durationStarIntro + durationStar * (stars.length + 1),
	};
};

export const useData = (data: string): TData => {
	const json = JSON.parse(data);

	const weeks = useWeeksData(json.weeks);
	const roads = useRoadsData(json.roads);
	const stars = useStarsData(json.stars);

	return {
		weeks,
		roads,
		stars,
		duration: stars.duration + roads.duration + weeks.duration,
	};
};
