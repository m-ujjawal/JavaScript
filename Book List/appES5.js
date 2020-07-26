//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() { }

UI.prototype.addBookToList = function (book) {
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

UI.prototype.showAlert = function (message, className) {
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

//Delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

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
    ui.deleteBook(e.target);
    //Show message
    ui.showAlert('Book Removed', 'success');
    e.preventDefault();
})