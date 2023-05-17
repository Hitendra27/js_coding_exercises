export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	
	return nums.map(num => num * num);
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	const capitalizedWords = words.map((word, index) => {
		if(index === 0) {
			return word.toLowerCase();
		} else {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		}
	});

	return capitalizedWords.join('');
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	
	return people.map(person => person.subjects.length)
	.reduce((total, count) => total + count, 0);
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	
	for(const item of menu) {
		if(item.ingredients.includes(ingredient)) {
			return true;
		}
	}
	return false;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	
	const duplicates = arr1.filter((num, index) => arr2.includes(num) && arr1.indexOf(num) === index);

	// sort method with compare function.
	return duplicates.sort((a, b) => a - b);
}
