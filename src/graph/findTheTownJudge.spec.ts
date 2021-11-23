import {assert} from 'chai';

function findJudge(n: number, trust: number[][]): number {
	const inEdge: number[] = [];
	const outEdge: boolean[] = [];

	for(let i = 0; i < n; i++) {
		inEdge[i] = 0;
		outEdge[i] = false;
	}

	for(let i = 0; i < trust.length; i++) {
		outEdge[trust[i][0] - 1] = true; 
		inEdge[trust[i][1] - 1]+=1;
	}

	console.log(inEdge, outEdge);

	for(let i = 0; i < n ; i ++) {
		if(inEdge[i] === n-1  && !outEdge[i]) {
			return i + 1;
		}
	}
	return -1;
	
};


describe('Find the Town Judge', () => {
	it('n =2, trusts = [[1,2]] ===> 2', () => {
		const result = findJudge(2, [[1,2]]);
		assert.equal(result, 2);
	});
	it('n = 3, trust = [[1,3],[2,3]]', () => {
		const result = findJudge(3, [[1,3],[2,3]]);
		assert.equal(result, 3);
	});
	it('n = 3, trust = [[1,3],[2,3],[3,1]]', () => {
		const result = findJudge(3, [[1,3],[2,3],[3,1]]);
		assert.equal(result, -1);
	});
	it('n = 3, trust = [[1,2],[2,3]] ===> -1', () => {
		const result = findJudge(3, [[1,2],[2,3]]);
		assert.equal(result, -1);
	})
})