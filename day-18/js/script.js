const quoteText = document.querySelector("#quote");
const author = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote-btn");

const showQuote = (quoteElement, authorElement, data) => {
    quoteElement.innerHTML = `
    <i class="fa-solid fa-quote-left"></i> ${data.quote} <i class="fa-solid fa-quote-right"></i>
    `;
    authorElement.innerHTML = `- ${data.author}`;
}

const fetchData = async () => {
    let index = 1;
    const response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const data = await response.json();
    newQuoteBtn.addEventListener("click", () => {
        if (index === data.quotes.length - 1) index = 1;
        index++;
        showQuote(quoteText, author, data.quotes[index]);
    });
    setInterval(() => {
        if (index === data.quotes.length - 1) index = 1;
        index++;
        showQuote(quoteText, author, data.quotes[index]);
    }, 12000);
}

fetchData();