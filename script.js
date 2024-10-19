// Array of quote objects
const quotes = [
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "What we think, we become.", author: "Buddha" },
  { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
];

// Function to generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  // Update the DOM
  document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
  document.getElementById('author').textContent = `- ${randomQuote.author}`;
}

// Add event listener to button
document.getElementById('new-quote-btn').addEventListener('click', generateRandomQuote);