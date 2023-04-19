export default function two_crystal_balls(breaks: boolean[]): number {
	const sqrt = Math.floor(Math.sqrt(breaks.length));

	let i = sqrt;
	for (; i < breaks.length; i += sqrt) {
		if (breaks[i]) break;
	}

	for (let j = i - sqrt; j < breaks.length; j++) {
		if (breaks[j]) return j;
	}
	return -1;
}
