export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');

	if(person.city === 'Manchester') {
		return true;
	}
	else {
		return false;
	}
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	
	const buses = Math.ceil(people / 40);

	return buses;
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}
