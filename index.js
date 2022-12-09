// form elements
const formSubmit  = document.getElementById("form");
const title       = document.getElementById("title");
const author      = document.getElementById("author");
const page        = document.getElementById("total");
const inputToggleClick = document.getElementById("toggle");
const toggleLabel      = document.getElementById("toggleLabel")
let toggleStatus = "";
let inputToggle  = false;
let bookId       = 0;

// table elements
const myBookList = document.getElementById("bookList");
// Object
const libraryObj = [];
class Book {
  constructor(id, title, author, page) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.status = page;
  }
}

// form submit function
formSubmit.addEventListener("submit", (e) => {
  const newBook = new Book(bookId, title.value, author.value, page.value);
  libraryObj.push(newBook);
  e.preventDefault();

  if (title.value === "" && author.value == "" ) {
    alert("Please fill the form")
  } else{
    createBook();
    title.value  = "";
    author.value = "";
    total.value  = "";
  }

  console.log(libraryObj)
});

// Toggle Function
inputToggleClick.addEventListener("click", () => {
  if (inputToggle === false) {
    inputToggle = true;
    toggleStatus = "Readed"
    toggleLabel.innerText = "Readed"
  } else {
    inputToggle= false;
    toggleStatus = "not Readed"
    toggleLabel.innerText = "not Readed"
  }
  console.log(inputToggle)
});

// HTML elements created
const createBook = function () {
  // Create essential table elements
  const tableRow    = document.createElement("tr");
  const tableDataId = document.createElement("td");
  const tableDataTitle  = document.createElement("td");
  const tableDataAuthor = document.createElement("td");
  const tableDataPage   = document.createElement("td");
  const tableDataStatus = document.createElement("td");

  // row goes table
  myBookList.appendChild(tableRow);

  // td goes tr
  tableRow.appendChild(tableDataId);
  tableRow.appendChild(tableDataTitle);
  tableRow.appendChild(tableDataAuthor);
  tableRow.appendChild(tableDataPage);
  tableRow.appendChild(tableDataStatus);

  // values goes td
  tableDataId.innerText = bookId += 1;
  tableDataTitle.innerText = title.value;
  tableDataAuthor.innerText = author.value;
  tableDataPage.innerText = page.value;
  tableDataStatus.innerText = toggleStatus;
}
