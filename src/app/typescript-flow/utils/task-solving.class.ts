type StrOrNumberType = string | number;
interface SolveTheTask {
	solveTheTask: () => void;
}

export abstract class Solver implements SolveTheTask {
	constructor(protected array: Array<StrOrNumberType>) {}

	abstract solveTheTask(): void;
}

export class Task1 extends Solver {
	private strArray: Array<string>;
	private map: Map<string, number> = new Map();

	constructor(array: Array<string>) {
		super(array);
		this.strArray = this.array as Array<string>;
	}

	public solveTheTask(): Array<string> {
		const array = this.strArray;

		array.forEach(fruitName => 
			this.map.set(fruitName, (this.map.get(fruitName) || 0) + 1)
		);

		return Array.from(this.map)
			.sort((fruitA, fruitB) => fruitB[1] - fruitA[1])
			.map(fruit => fruit[0]);
	}
}

export class Task2 extends Solver {
	private numbArray: Array<number> = [];
	
	constructor(...array: Array<number>) {
		super(array);
		this.numbArray = this.array as Array<number>;
	}

	public solveTheTask(): Array<number> {
		return this.numbArray.map(value => value * 2);
	}
}

export function sum(arg1: number): (arg2: number) => number {
	return (arg2: number) => {
		return arg1 + arg2;
	}
}

type SumFuncWithUnlimitedArgs = 
	(key: number | undefined) => number | SumFuncWithUnlimitedArgs ;

export function sumWithUnlimitedArgs(arg1: number): any {
	return (arg2: number | undefined): 
		(number | SumFuncWithUnlimitedArgs) => 
			arg2 ? sumWithUnlimitedArgs(arg1 + arg2) : arg1;
}


export const sum2Args = (arg1: number, arg2: number): number => {
	return arg1 + arg2;
}

export const mul2Args = (arg1: number, arg2: number): number => {
	return arg1 * arg2;
}

export function calculate(
	helper: (arg1: number, arg2: number) => number
): any {
	return (arg1: number) => (arg2: number) => helper.call(null, arg1, arg2);
}


// Array.prototype.map = function (
// 	callbackFn: (value: any, index: number, array: any[]) => any): any[] {
// 		const result: any[] = [];
// 		this.forEach((value, index, array) => 
// 			result.push(callbackFn(value, index, array)));
		
// 		return result;
// };

// console.log([2, 3].map((value, index) => value * (index+1) ));