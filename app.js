//Book class: Represents a Book
class Book {
    //a constructor is just a method that runs when you instantiate a book
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book one',
                author: 'John Wamae',
                isbn: '34'
            },
            {
                title: 'Book Two',
                author: 'Jane Waithera',
                isbn: '45'
            },
            {
                title: 'Book Three',
                author: 'Wakadaniali Maathai',
                isbn: '56'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-List');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

//Store Class: Handles Storage


//Events: Display Books
document.addEventListener('DomContentLoaded', UI.displayBooks);

//Event:Add a Book


//Event:Remove a Book