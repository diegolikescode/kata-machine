export default function bubble_sort(arr: number[]): void {
	let sorted = false;
	let sortedValsQnt = 0;
	do {
		sorted = true;
		for (let i = 1; i < arr.length - sortedValsQnt; i++) {
			if (arr[i - 1] > arr[i]) {
				sorted = false;
				const aux = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = aux;
			}
		}
	} while (!sorted);
	console.log(arr);
}
