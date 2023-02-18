// Implement the Ice and Fire API using async/await with fetch.

const ApiUrl = "https://anapioficeandfire.com/api/books"
const charcterUrl = "https://anapioficeandfire.com/api/characters/"

async function fetchData(){
    try{
        const response = await fetch(ApiUrl);
        const data = await response.json();
        const booksdata = data.slice(0, 50);
        // console.log(booksdata);
        booksdata.forEach(book => {
            console.log(`book name: ${book.name}, book isbn: ${book.isbn}, book number of pages: ${book.numberOfPages},
book authors: ${book.authors}, book released date: ${book.released}, book character:${book.characters.slice(0,5)}`);   
        });  
    }catch{
        console.log("somthing error");
    }
}

fetchData()