let apiQuotes = [];

// Get quotes from API
async function getQuotes() {

// Show new quote
function newQuote() {
	//pick random quote from array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	console.log(quote);
}
	const apiUrl = 'https://type.fit/api/quotes';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		console.log(error);
	}
}

// On load
getQuotes();