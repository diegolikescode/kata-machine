type Node<T> = {
	value: T;
	previous?: Node<T>;
};

export default class Stack<T> {
	public length: number;
	private head?: Node<T>;

	constructor() {
		this.length = 0;
		this.head = undefined;
	}

	push(item: T): void {
		const node = { value: item } as Node<T>;
		this.length++;
		if (!this.head) {
			this.head = node;
			return;
		}
		node.previous = this.head;
		this.head = node;
	}

	pop(): T | undefined {
		if (this.length > 0) this.length--;
		if (!this.head) {
			return undefined;
		}
		const head = this.head;
		this.head = this.head.previous;
		return head.value;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}
