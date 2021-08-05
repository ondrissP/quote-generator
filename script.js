const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
let apiQuotes = [];

function showLoadingSpinner() {
	quoteContainer.hidden = true;
	loader.hidden = false;
}
function completeLoading() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

// Get quotes from API
async function getQuotes() {
	showLoadingSpinner();
// Show new quote
function newQuote() {
	//pick random quote from array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	// check, if author is blank
	if (!quote.author) {
		authorText.textContent = 'Unknown';
	} else {
		authorText.textContent = quote.author;
	}
	// check quote length to add styling
	if (quote.text.length > 100) {
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}
	quoteText.textContent = quote.text;
	completeLoading();
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
// tweet quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
};

// Event Listeners
newQuoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote)

// On load
getQuotes();
