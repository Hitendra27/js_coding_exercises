export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	// for loop
	// const smallNumbers = [];

	// for(let i = 0; i < nums.length; i++) {
	// 	if (nums[i] < 1) {
	// 		smallNumbers.push(nums[i]);
	// 	}
	// }

	// return smallNumbers;

	// for Each
	const smallNumbers = [];

	nums.forEach(element => {
		if(element < 1) {
			smallNumbers.push(element);
		}
	});

	return smallNumbers;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	
	//for loop
	// const newName = [];

	// for(let i = 0; i < names.length; i++) {
	// 	if (names[i].charAt(0) === char) {
	// 		newName.push(names[i]);
	// 	}
	// }

	// return newName;

	// for Each
	const newName = [];

	names.forEach(element => {
		if(element.charAt(0) === char) {
			newName.push(element);
		}
	});

	return newName;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	
	// for loop
	// const verbs = [];

	// for(let i = 0; i < words.length; i++) {
	// 	if(words[i].startsWith('to ')) {
	// 		verbs.push(words[i]);
	// 	}
	// }

	// return verbs;

	// for Each
	const verbs = [];

	words.forEach(element => {
		if(element.startsWith('to ')) {
			verbs.push(element);
		}
	});

	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	
	// for loop
	// const arr = [];

	// for(let i = 0; i < nums.length; i++) {
	// 	if(Number.isInteger(nums[i])) {
	// 		arr.push(nums[i]);
	// 	}
	// }

	// return arr;

	// for Each
	const arr = [];

	nums.forEach(element => {
		if(Number.isInteger(element)) {
			arr.push(element);
		}
	});

	return arr;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// for loop

	// const userCity = [];

	// for(let i = 0; i < users.length; i++) {
	// 	userCity.push(users[i].data.city.displayName);
	// }

	// return userCity;

	// for Each	 
	const userCity = [];

	users.forEach(element => {
		userCity.push(element.data.city.displayName);
	});

	return userCity;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	
	// for loop

	//Math.sqrt(number) -> sqrt formula

	// const numbers = [];

	// for(let i = 0; i < nums.length; i++) {
	// 	const squareRoot = Math.sqrt(nums[i]);
	// 	const roundedSquareRoot = squareRoot.toFixed(2);
	// 	numbers.push(parseFloat(roundedSquareRoot));
	// }

	// return numbers;

	// for Each

	const numbers = [];

	nums.forEach(el => {
		const squareRoot = Math.sqrt(el);
		const roundedSquareRoot = squareRoot.toFixed(2);
		numbers.push(parseFloat(roundedSquareRoot));
	});

	return numbers;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	
	// for loop

	// const result = [];

	// for(let i = 0; i < sentences.length; i++) {
	// 	const sentence = sentences[i].toLowerCase();
	// 	const searchStr = str.toLowerCase();

	// 	if(sentence.includes(searchStr)) {
	// 		result.push(sentences[i]);
	// 	}
	// }

	// return result;

	// for Each
	const result = [];

	sentences.forEach(el => {
		const sentence = el.toLowerCase();
		const searchStr = str.toLowerCase();

		if(sentence.includes(searchStr)) {
			result.push(el);
		}
	});

	return result;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// for loop

	
}
