// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	const capitalized = word.charAt(0).toUpperCase() + word.slice(1);

	return capitalized;
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	const firstNameIn = firstName[0].charAt(0).toUpperCase()
	const lastNameIn = lastName.charAt(0).toUpperCase()
	return `${firstNameIn}.${lastNameIn}`
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
	
	const arrayStrings = word.split("");

	const reverseArray = arrayStrings.reverse();

	const joinArray = reverseArray.join("");

	return joinArray;
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	
	const reversedWords = words.map(word => word.split('').reverse().join(''));

	return reversedWords;
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
}
