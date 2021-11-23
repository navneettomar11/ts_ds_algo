import {expect} from 'chai';

class MyHashMap {
	
	localMap: number[];

    constructor() {
		this.localMap = [];
    }

    put(key: number, value: number): void {
		this.localMap[key] = value;
    }

    get(key: number): number {
		const value = this.localMap[key];
		if(value >= 0) {
			return value;
		}
		return -1;
    }

    remove(key: number): void {
		delete this.localMap[key];
    }
}

describe('Design HashMap', () => {
	it('valid' , () => {
		const hMap = new MyHashMap();
		hMap.put(1,1);
		hMap.put(2,2);
		expect(hMap.get(1)).to.equal(1);
		expect(hMap.get(3)).to.equal(-1);
		hMap.put(2,1);
		expect(hMap.get(2)).to.equal(1);
		hMap.remove(2); 
		expect(hMap.get(2)).to.equal(-1);	
	});

	it('valid ', () => {
		const hMap = new MyHashMap();
		hMap.remove(2);
		expect(hMap.get(2)).to.equal(-1);
		hMap.put(3,11);
		hMap.put(4,13);
		hMap.put(15,6);
		hMap.put(8,8);
		hMap.put(11, 0);
		expect(hMap.get(11)).to.equal(0);
		hMap.put(1, 10);
		hMap.put(12, 14);
	})
});