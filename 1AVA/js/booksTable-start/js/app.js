const containerBooks = document.querySelector("#list-books");
const inputSearch = document.querySelector("#input-search");
let booksJSON = [];

document.addEventListener('DOMContentLoaded', () => {

    getBooks();
    inputSearch.addEventListener('keyup', () => {
        if (inputSearch.value.length >= 3) {
            let titleSearch = inputSearch.value.toLowerCase();

            let results = booksJSON.filter(book => {
                let title = book.title.toLowerCase();
                return title.includes(titleSearch);
            });
            populateBooks(results);
        }
    });

    inputSearch.addEventListener("keydown", () => {
        if (this.value.length === 0) {
            populateBooks(booksJSON);
        }
    })

});

function getBooks() {

    fetch('data/books.json')
        .then(response => response.json())
        .then(data => {
            booksJSON = data;
            populateBooks(data);
        });

}

function populateBooks(books) {
    containerBooks.innerHTML = "";

    books.forEach(book => {

        containerBooks.innerHTML +=
            `
        <tr>
            <td>${book.title}</td>
            <td>${book.yearRelease}</td>
            <td>${book.price}</td>
            <td>${getWritersName(book.writers)}</td>
        <tr>
            
        `
    });
}

function getWritersName(writers) {
    let authors = "";

    writers.forEach((writer, index) => {
        authors += writer.name + " " + writer.surname + ", ";
        if (index < (writers.length - 1)) authors += ",";
    });
    return authors;
}

