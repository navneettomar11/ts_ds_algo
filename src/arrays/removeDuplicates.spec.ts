import {assert} from 'chai';

function removeDuplicates(arr: number[]): number {
	if(!arr || arr.length === 0) {
		 return 0;
	}
	let slow = 0; 
	for(let fast = 0; fast < arr.length; fast++){

		if(arr[slow] !== arr[fast]) {
			slow++
			arr[slow] = arr[fast];
		}
	}
	return slow + 1;
}

describe('Remove Duplicates', () =>{
	it('[0, 0, 1, 1, 1, 2, 2] ===> 3', () => {
		const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2]);
		assert.equal(result, 3);
	});
})