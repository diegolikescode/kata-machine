export default function two_crystal_balls(breaks: boolean[]): number {
	const sqrt = Math.sqrt(breaks.length);

	let srBreak = 0;
	for (let i = sqrt; i < breaks.length; i += sqrt) {
		if (breaks[i]) srBreak = i;
		break;
	}

	for (let i = srBreak - sqrt; i < breaks.length; i++) {
		if (breaks[i]) return i;
	}
	return -1;
}
