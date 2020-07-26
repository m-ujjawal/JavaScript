class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
class UI {

    addBookToList(book) {
        const list = document.getElementById('book-list');
        //Create tr element
        const row = document.createElement('tr');
        //Insert cols
        row.innerHTML = `
    <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X<a></td>
        `;
        list.appendChild(row);
    }
    showAlert(message, className) {
        //Create div
        const div = document.createElement('div');
        //Add classes
        div.className = `alert ${className}`;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get Parent
        const container = document.querySelector('.container');
        //Get form
        const form = document.querySelector('#book-form');
        //Insert alert
        container.insertBefore(div, form);
        //Timeout after 3 sec
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000
        );
    }
    deleteBook(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }
    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function (book) {
            const ui = new UI();
            ui.addBookToList(book);
        })
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        console.log(isbn);
        const books = Store.getBooks();
        books.forEach(function (book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1)
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks());
//Event Listner for add book
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        //Get form value
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;
        //Instantiating book
        const book = new Book(title, author, isbn);

        //Instantiate UI
        const ui = new UI();

        //Validate Form

        if (title === '' || author === '' || isbn === '') {
            //Error alert
            ui.showAlert('Please fill in all fields', 'error');
        } else {

            //Adding book to list
            ui.addBookToList(book);
            //Show Success
            ui.showAlert('Book Added', 'success')

            //Store in LS
            Store.addBook(book);
            //Create Fields
            ui.clearFields();
        }
        e.preventDefault();
    });

//Event listner for delete book

document.getElementById('book-list')
    .addEventListener('click', function (e) {
        //Instantiate ui
        const ui = new UI();
        //Delete Book
        ui.deleteBook(e.target);
        //Remove from LS
        Store.removeBook(
            e.target.parentElement.previousElementSibling.
                textContent);
        //Show message
        ui.showAlert('Book Removed', 'success');
        e.preventDefault();
    });