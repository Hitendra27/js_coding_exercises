export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	
	const index = nums.indexOf(n);
	if(index === -1 || index === nums.length - 1) {
		return null;
	}
	return nums[index + 1];
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	
	const frequencies = {
		1: 0,
		0: 0
	};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
	if (char === '1' || char === '0') {
		frequencies[char] += 1;
	}
  }

  return frequencies;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	
	const reverseNum = parseFloat(n.toString().split('').reverse().join(''));
	return reverseNum;

	// Math.sign(n) -> if for any negative number to reverse.
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	
	// concat() the arrays into 1 array.
	const sumArray = arrs.reduce((accumulator, currentArray) => accumulator.concat(currentArray), []);

	// total the new array.
	const total = sumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	return total;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	if(arr.length < 2) {
		return arr;
	}
	
	// destructuring method to swap first and last.
	const [firstItem, ...middleItemsArray] = arr;
	const lastItem = middleItemsArray.pop()

	return [lastItem, ...middleItemsArray, firstItem];
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	
	const needle = haystack.find(el => el.includes(searchTerm));
	return needle;
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	
	//const frequencies = {};
};
