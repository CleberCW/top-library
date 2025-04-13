// Using factory functions (and IIFE)

const library = (function () {
  let id = 1;
  let books = localStorage.books ? JSON.parse(localStorage.books) : [];

  function displayBooks() {
    const bookTable = document.querySelector("#book-list tbody");
    bookTable.innerHTML = "";

    books.forEach((book, index) => {
      const newRow = bookTable.insertRow();
      newRow.dataset.index = index;
      for (let key in book) {
        const cell = newRow.insertCell();
        cell.textContent =
          key == "isRead" ? (book[key] ? "Yes" : "No") : book[key];
      }

      const removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.className = "removeButton";

      const changeReadStatus = document.createElement("button");
      changeReadStatus.innerText = "Change Read Status";
      changeReadStatus.className = "changeReadStatus";

      const cellButtons = newRow.insertCell();
      cellButtons.appendChild(removeButton);
      cellButtons.appendChild(changeReadStatus);

      if (book.isRead) newRow.classList.add("read-book-row");
      else newRow.classList.add("not-read-book-row");
    });
  }

  function createBook(title, author, pages, isRead) {
    const bookId = id++;
    const book = {
      id: bookId,
      title: title,
      author: author,
      pages: pages,
      isRead: isRead,
    };

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  function toggleRead(index) {
    const book = books[index];
    book.isRead = !book.isRead;
    localStorage.setItem("books", JSON.stringify(books));
  }

  function removeBook(index) {
    books.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books));
  }

  return {
    toggleRead,
    createBook,
    displayBooks,
    removeBook,
  };
})();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    const row = e.target.closest("tr");
    const index = row.dataset.index;
    library.removeBook(index);
    library.displayBooks();
  }

  if (e.target.classList.contains("changeReadStatus")) {
    const row = e.target.closest("tr");
    const index = row.dataset.index;
    library.toggleRead(index);
    library.displayBooks();
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
      library.createBook(bookTitle, bookAuthor, bookPages, bookHasRead);
      library.displayBooks();
    }
    const modal = document.querySelector("#bookForm");
    modal.classList.toggle("hidden");
    document.querySelector("form").reset();
  });

library.displayBooks();
