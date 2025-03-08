class Library {
  books = [];

  displayBooks() {
    const bookTable = document.querySelector("#book-list tbody");
    bookTable.innerHTML = "";

    this.books.forEach((book, index) => {
      const newRow = bookTable.insertRow();
      for (let key in book) {
        const cell = newRow.insertCell();
        cell.textContent =
          key == "isRead" ? (book[key] == true ? "Yes" : "No") : book[key];
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

      if (book.isRead) {
        newRow.classList.add("read-book-row");
      } else {
        newRow.classList.add("not-read-book-row");
      }
    });
  }

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
    }
    myLibrary.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    myLibrary.displayBooks();
  }

  getBook(index) {
    return this.books[index];
  }
}

class Book {
  static id = 1;
  constructor(title, author, pages, isRead) {
    this.id = Book.id++;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}

const myLibrary = new Library();
myLibrary.addBook(new Book("Amen", "Anon", 321, false));

document.addEventListener("click", (e) => {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("removeButton")) {
    myLibrary.removeBook(index);
    myLibrary.displayBooks();
  }

  if (e.target.classList.contains("changeReadStatus")) {
    myLibrary.getBook(index).toggleRead();
    myLibrary.displayBooks();
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
        ? true
        : false;

    if ((bookTitle, bookAuthor, bookPages)) {
      newBook = new Book(bookTitle, bookAuthor, bookPages, bookHasRead);
      myLibrary.addBook(newBook);
    }
    const modal = document.querySelector("#bookForm");
    modal.classList.toggle("hidden");
    document.querySelector("form").reset();
  });

myLibrary.displayBooks();
