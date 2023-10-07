const myLibrary = [];

function Book(title, author, numPages, haveRead) {
    this.title = title
    this.author = author
    this.numPages = numPages
    this.haveRead = haveRead
}

function addBoookToLibrary() {
    const title = document.getElementsByName("title")[0].value;
    const author = document.getElementsByName("author")[0].value;
    const numPages = document.getElementsByName("numPages")[0].value;
    const haveRead = false;
    const book = new Book(title, author, numPages, haveRead);
    myLibrary.push(book);
    displayLibrary();
}

function createHTMLCard(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    createTable(book);
    libraryContainer.appendChild(card);
}

const libraryContainer = document.getElementById("libraryContainer");

function createTable(book) {
    const labels = ["Title", "Author", "Number of Pages", "Have Read"];
    const bookProperties = ["title", "author", "numPages", "haveRead"];

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < 4; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            const cell = document.createElement("td");
            if (j == 0) {
                const cellText = document.createTextNode(labels[i]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            if (j == 1) {
                const cellText = document.createTextNode(book[bookProperties[i]]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    tbl.classList.add("book-table");
    libraryContainer.appendChild(tbl);
}

function displayLibrary() {
    libraryContainer.innerText = '';
    for (books in myLibrary) {
        createHTMLCard(books);
    }
}

const saveButton = document.getElementById('addToLib');
saveButton.addEventListener('click', addBoookToLibrary);

//const book1 = new Book("Foo", "Bar", 420, true);
//addBoookToLibrary(book1);
//createHTMLCard(myLibrary[0]);
