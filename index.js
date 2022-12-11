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
  e.preventDefault();

  if (title.value === "" && author.value === "" ) {
    alert("Please fill the form")
  } else{
    const newBook = new Book(bookId, title.value, author.value, page.value);
    libraryObj.push(newBook);
    createBook();
    title.value  = "";
    author.value = "";
    total.value  = "";
  }

});

// Toggle Function
inputToggleClick.addEventListener("click", () => {
  if (inputToggle === false) {
    inputToggle  = true;
    toggleStatus = "Readed"
    toggleLabel.innerText = "Readed"
  } else {
    inputToggle  = false;
    toggleStatus = "not Readed"
    toggleLabel.innerText = "not Readed"
  }
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
  const tableDataBtn    = document.createElement("td");
  const removeBtn       = document.createElement("button");
  const tableDataStatusBtn = document.createElement("td");
  const changeStatus     = document.createElement("button");

  // row goes table
  myBookList.appendChild(tableRow);

  // td goes tr
  tableRow.appendChild(tableDataId);
  tableRow.appendChild(tableDataTitle);
  tableRow.appendChild(tableDataAuthor);
  tableRow.appendChild(tableDataPage);
  tableRow.appendChild(tableDataStatus);
  tableRow.appendChild(tableDataBtn);
  tableDataBtn.appendChild(removeBtn);
  tableRow.appendChild(tableDataStatusBtn);
  if (toggleStatus != "Readed") {
    tableDataStatusBtn.appendChild(changeStatus);
  }

  let statusToggle = false;
  changeStatus.className = "btn btn-sm btn-warning";
  changeStatus.addEventListener("click", () => {
    if ( statusToggle === false ){
      statusToggle  = true;
      changeStatus.className = "btn btn-sm btn-success";
      tableDataStatus.innerText = "Readed"
    } else{
      statusToggle  = false;
      changeStatus.className = "btn btn-sm btn-warning";
      tableDataStatus.innerText = "not Readed"
    }
  });



  removeBtn.className    = "btn btn-sm btn-danger remove-book";
  removeBtn.addEventListener("click", () => {
    tableRow.remove();
    delete libraryObj;
  });
  // values goes td
  tableDataId.innerText = bookId += 1;
  tableDataTitle.innerText  = title.value;
  tableDataAuthor.innerText = author.value;
  tableDataPage.innerText   = page.value;
  tableDataStatus.innerText = "not Readed";
  removeBtn.innerText    = "Remove Book";
  changeStatus.innerText = "Readed";
}
