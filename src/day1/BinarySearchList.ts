export default function bs_list(haystack: number[], needle: number): boolean {
	const getMid = (mlo: number, mhi: number) =>
		Math.floor(mlo + (mhi - mlo) / 2);
	let lo = 0;
	let hi = haystack.length;

	do {
		const m = getMid(lo, hi);
		const val = haystack[m];

		if (needle === val) {
			return true;
		} else if (needle > val) {
			lo = m + 1;
		} else {
			hi = m;
		}
	} while (lo < hi);
	return false;
}
