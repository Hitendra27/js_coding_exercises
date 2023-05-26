// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');

	return word.charAt(0).toUpperCase() + word.slice(1);

	
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');

	return `${firstName[0]}.${lastName[0]}`;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');

	const vatAmount = (originalPrice * vatRate) / 100;
	const totalPrice = originalPrice + vatAmount;

	return parseFloat(totalPrice.toFixed(2));
	
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	
	const reductionAmount = (originalPrice * reduction) / 100;
	const salePrice = originalPrice - reductionAmount

	return parseFloat(salePrice.toFixed(2));
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	
	const middle = Math.floor(str.length / 2);

	return str.length % 2 === 0 ? str.slice(middle - 1, middle + 1) : str.slice(middle, middle + 1);
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	

	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	//return words.map(word => word.split('').reverse().join(''));

	return words.map(word => reverseWord(word));

}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	
	return users.filter(user =>  user.type === 'Linux').length ;

}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	
	let total = 0;
	let count = 0;

	scores.forEach((item) => {
		total += item;
		count++;
	});

	const meanScore = total / count;
	
	return parseFloat(meanScore.toFixed(2));
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	
	if(n % 3 === 0 && n % 5 === 0) {
		return "fizzbuzz";
	} else if(n % 3 == 0) {
		return "fizz";
	} else if(n % 5 == 0) {
		return "buzz";
	} else {
		return n;
	}
}
