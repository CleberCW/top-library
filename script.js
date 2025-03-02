const myLibrary = [
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    pages: 544,
    isRead: "Yes",
  },
];

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

function displayBooksOnPage() {
  const bookTable = document.querySelector("#book-list tbody");
  bookTable.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const newRow = bookTable.insertRow();
    for (let key in book) {
      const cell = newRow.insertCell();
      cell.textContent = book[key];
    }
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "removeButton";
    removeButton.dataset.index = index;

    const changeReadStatus = document.createElement("button");
    changeReadStatus.innerText = "Change Read Status";
    changeReadStatus.className = "changeReadStatus";
    changeReadStatus.dataset.index = index;

    const cellButtons = newRow.insertCell();
    cellButtons.appendChild(removeButton);
    cellButtons.appendChild(changeReadStatus);

    if (book.isRead == "Yes") {
      newRow.classList.add("read-book-row");
    } else {
      newRow.classList.add("not-read-book-row");
    }
  });
}

document.addEventListener("click", (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("removeButton")) {
    myLibrary.splice(index, 1);
    displayBooksOnPage();
  }

  if (e.target.classList.contains("changeReadStatus")) {
    if (myLibrary[index].isRead == "Yes") {
      myLibrary[index].isRead = "No";
    } else {
      myLibrary[index].isRead = "Yes";
    }

    displayBooksOnPage();
  }

  if (e.target.classList.contains("toggleModal")) {
    const modal = document.querySelector("#bookForm");
    modal.classList.toggle("hidden");
  }
});

document
  .getElementById("bookForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const bookTitle = document.querySelector("#bookForm #title").value;
    const bookAuthor = document.querySelector("#bookForm #author").value;
    const bookPages = document.querySelector("#bookForm #pages").value;
    const bookHasRead =
      document.querySelector('#bookForm input[name="choice"]:checked').value ===
      "true"
        ? "Yes"
        : "No";

    if ((bookTitle, bookAuthor, bookPages)) {
      addBookToLibrary(bookTitle, bookAuthor, bookPages, bookHasRead);
    }
    const modal = document.querySelector("#bookForm");
    modal.classList.toggle("hidden");
    displayBooksOnPage();
    document.querySelector("form").reset();
  });

displayBooksOnPage();
