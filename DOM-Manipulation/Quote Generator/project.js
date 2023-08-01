//variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:`"Be yourself; everyone else is already taken."`,
    person:`Oscar Wilde`
}, {
    quote:`"So many books, so little time."`,
    person:`Frank Zappa`
},{
    quote:`"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
    person:`Bernard M. Baruch`
},{
    quote:`"If you tell the truth, you don't have to remember anything."`,
    person:`Mark Twain`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
