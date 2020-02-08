const myLibrary = document.querySelector(".book-table");
let libraryArray = []

class Book {
    constructor(title, author, read) {
        this.title = title
        this.author = author
        this.read = read
    }
}

function addBooktoLibrary () {
    let inputTitle = document.getElementById("input-title").value;
    let inputAuthor = document.getElementById("input-author").value;
    let inputRead = document.getElementById("input-read").checked;
    //const formDiv = document.querySelector(".input-form");
    
    console.log(inputTitle + " " + inputAuthor + " " + inputRead)
    let newBook = new Book(inputTitle, inputAuthor, inputRead)
    
    libraryArray.push(newBook);
    renderLibrary(newBook);
    removeForm();
}

function createForm() {
    const formDiv = document.querySelector(".input-form");
    const titleCreate = document.createElement("input");
    const authorCreate = document.createElement("input");
    const readCreate = document.createElement("input");
    const submitCreate = document.createElement("input");
    const readLabel = document.createElement("label");

    titleCreate.setAttribute("type", "text");
    authorCreate.setAttribute("type", "text");
    readCreate.setAttribute("type", "checkbox");
    submitCreate.setAttribute("type", "submit");
    readLabel.setAttribute("for", "input-read");

    titleCreate.setAttribute("placeholder", "Title");
    authorCreate.setAttribute("placeholder", "Author");
    readLabel.innerHTML = "Read?";

    titleCreate.setAttribute("id", "input-title");
    authorCreate.setAttribute("id", "input-author");
    readCreate.setAttribute("id", "input-read");
    submitCreate.setAttribute("id", "input-submit");
    readLabel.setAttribute("id", "input-readlabel");
    submitCreate.setAttribute("onclick", "addBooktoLibrary();");

    formDiv.appendChild(titleCreate);
    formDiv.appendChild(authorCreate);
    formDiv.appendChild(readCreate);
    formDiv.appendChild(readLabel);
    formDiv.appendChild(submitCreate);
}

function removeForm() {
    const formDiv = document.querySelector(".input-form");
    const titleRemove = document.getElementById("input-title");
    const authorRemove = document.getElementById("input-author");
    const readRemove = document.getElementById("input-read");
    const submitRemove = document.getElementById("input-submit");
    const labelRemove = document.getElementById("input-readlabel");

    titleRemove.remove();
    authorRemove.remove();
    readRemove.remove();
    submitRemove.remove();
    labelRemove.remove();

    
}

function renderLibrary(newBook) {
    const content = document.querySelector(".table-body");
    const trCreate = document.createElement("tr");
    let tdTitle = document.createElement("td")
    let tdAuthor = document.createElement("td")
    let tdRead = document.createElement("td")
    tdTitle.classList.add("td-title");
    tdAuthor.classList.add("td-author");
    tdRead.classList.add("td-read");

    tdTitle.textContent = newBook.title;
    tdAuthor.textContent = newBook.author;
    if (newBook.read == true) {
        tdRead.textContent = "Y";
    } else {
        tdRead.textContent = "N";
    };
     
    content.appendChild(trCreate);
    trCreate.appendChild(tdTitle);
    trCreate.appendChild(tdAuthor);
    trCreate.appendChild(tdRead);
}

