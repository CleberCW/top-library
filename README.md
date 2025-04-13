# 📚 Library App

A simple web application for managing your personal book library. You can add, view, update, and remove books. Built with plain JavaScript, HTML, and CSS, this project serves as a playground for exploring core concepts like DOM manipulation, object-oriented programming, closures, and localStorage.

---

## ✨ Features

- ✅ Add new books with title, author, number of pages, and read status
- ✅ View all books in a structured table
- ✅ Remove individual books
- ✅ Toggle between "Read" and "Not read" status
- ✅ Modal popup form for adding books
- ✅ Visual distinction for read vs. unread books
- ✅ Two logic implementations:
  - `script.js`: using ES6 classes
  - `script2.js`: using factory functions and closures (IIFE)
- ✅ Data persistence using `localStorage` (in `script2.js` version)

---

## 🖼️ Interface

The UI includes:

- An **"Add a book"** button that triggers a modal form
- A table displaying the list of books
- Buttons to **remove** or **change read status** per book

---

## 🧠 Tech Stack

- HTML5
- CSS3 (no frameworks)
- JavaScript (ES6+)
  - Classes
  - Factory Functions
  - DOM Manipulation
  - Event Handling
  - `localStorage`

---

## 🚀 How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/library-app.git
   ```
2. Open the `index.html` file in your web browser
3. Use the "Add a book" button to start adding books

> 🔁 To switch between the two logic versions, change the script at the bottom of `index.html`:
```html
<!-- Class-based version -->
<script src="script.js"></script>

<!-- Factory function version -->
<script src="script2.js"></script>
```

---

## 🗃️ File Structure

```
📦 Library App
├── index.html         # Main HTML page
├── styles.css         # App styling
├── script.js          # Logic using ES6 Classes
├── script2.js         # Logic using Factory Functions (IIFE)
└── README.md          # Project documentation
```

---

## 💡 Key Learnings

This project explores and compares two design patterns:

- **ES6 Classes:** modern OOP encapsulation
- **Closures + IIFE:** encapsulation through functional scope

It also introduces `localStorage` for front-end data persistence.

---

## 🧪 Potential Improvements

- 📁 Use IndexedDB or backend integration
- 🔍 Add filters/search by title or author
- 🧱 Enhanced form validation
- 🌐 GitHub Pages deployment

---

## 🧑‍💻 Author

Developed by **Cleber Leal** — [LinkedIn](https://www.linkedin.com/) | [GitHub](https://github.com/)

