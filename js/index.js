var quotes = [
    { text: "“If you tell the truth, you don't have to remember anything.”", author: "Mark Twain" },
    { text: "“Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .’”", author: "C.S. Lewis, The Four Loves" },
    { text: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”", author: "Maya Angelou" },
    { text: "“A friend is someone who knows all about you and still loves you.”", author: "Elbert Hubbard" },
    { text: "“To live is the rarest thing in the world. Most people exist, that is all.”", author: "Oscar Wilde" },
    { text: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”", author: "Martin Luther King Jr" },
    { text: "“We do not remember days, we remember moments. The richness of life lies in memories we have forgotten.”", author: "Cesare Pavese" }
];

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
    document.getElementById('quote').innerText = quote.text;
    document.getElementById('author').innerText = quote.author;
}
