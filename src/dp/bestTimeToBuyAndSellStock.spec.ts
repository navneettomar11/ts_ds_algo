import {assert} from 'chai';

function maxProfit(prices: number[]): number {
	let buyIdx = 0;
	let sellIdx = 1;
	let profit = 0;
	while(sellIdx < prices.length) {
		if(prices[sellIdx] < prices[buyIdx]) {
			buyIdx = sellIdx;
		} else {
			profit = Math.max(profit, prices[sellIdx] - prices[buyIdx]);
		}
		sellIdx++;
	}
	return profit;
};

function maxProfitAchieve(prices: number[]): number {
	let maxProfit = 0;
	for(let i = 1; i < prices.length; i++) {
		if(prices[i] > prices[i-1]) {
			maxProfit+=prices[i] - prices[i-1];
		}
	}
	return maxProfit;
}

function maxProfitWithCoolDown(prices: number[]): number {
		let endWithSell = 0;
		let endWithBuy = Number.MIN_SAFE_INTEGER;
		let prevBuy = 0;
		let prevSell = 0;
		for(let i = 0; i < prices.length; i++) {
			prevBuy = endWithBuy;
			endWithBuy = Math.max(endWithBuy, prevSell - prices[i]);
			prevSell = endWithSell;
			endWithSell = Math.max(endWithSell, prevBuy + prices[i]);
			//console.log(i, 'PrevBuy ', prevBuy, 'PrevSell', prevSell, ' endwith buy', endWithBuy, ' end with sell', endWithSell);
		}

		return endWithSell;
};


function maxProfitWithTransactionFee(prices: number[], fee: number) : number {
	let max = 0;
	let hold = prices[0] * -1;
	for(let i = 1; i < prices.length; i++) {
		max = Math.max(max, hold + prices[i] - fee);
		console.log('max ', max);
		hold = Math.max(hold, max - prices[i]);
		console.log('hold', hold);
	}
	return max;
}

describe('Best Time to Buy and Sell Stocks', () => {
	it('prices = [7,1,5,3,6,4] ===> 5', () => {
		assert.equal(maxProfit([7,1,5,3,6,4]), 5);
	});

	it('Max Profit Achieve prices [7,1,5,3,6,4] ===> 7', () => {
		assert.equal(maxProfitAchieve([7,1,5,3,6,4]), 7);
	});

	it('Max Profit Achieve with cooldown [1,2,3,0,2] ===> 3', () => {
		assert.equal(maxProfitWithCoolDown([1,2,3,0,2]), 3);
	})
	it('Max Profit Achieve with transaction fee  prices = [1,3,2,8,4,9], fee = 2 ===> 8', () => {
		assert.equal(maxProfitWithTransactionFee([1,3,2,8,4,9], 2), 8);
	})
});