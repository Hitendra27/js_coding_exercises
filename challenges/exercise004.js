export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	const smallNumbers = nums.filter(el => el < 1);
	return smallNumbers;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	
	const newName = names.filter(el => el.charAt(0) === char);
	return newName;

	
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	const verbs = words.filter(word => word.startsWith('to '));
	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	
	const arr = nums.filter(el => Number.isInteger(el));
	return arr;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');

	const userCity = users.map(user => user.data.city.displayName);
	return userCity;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	
	const numbers = nums.map(el => {
		const squareRoot = Math.sqrt(el);
		const roundedSquareRoot = squareRoot.toFixed(2);
		return parseFloat(roundedSquareRoot);
	})

	return numbers;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	
	const result = sentences.filter(el => {
		const sentence = el.toLowerCase();
		const searchStr = str.toLowerCase();

		return sentence.includes(searchStr);
	});

	return result;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');

	const longestSlides = triangles.map(el => Math.max(...el));
	return longestSlides;
}
