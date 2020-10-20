class BookList {
    constructor(books) {
        this.books = books;
        this.numberOfReadBooks = [];
        this.numberOfBooksNotRead = this.books.length;
        this.currentBook = this.books[0];
        this.nextBook = this.books[1];
        this.lastBook = null;
    }

    addBook(book) {
        this.books.push(book);
        this.numberOfBooksNotRead +=1;
        
    }

    finishCurrentBook() {
        this.numberOfReadBooks +=1;
        this.numberOfBooksNotRead -+ 1;
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = this.books[this.books.indexOf(this.currentBook) + 1];
        this.currentBook.isRead = true;
        this.currentBook.readDate = new Date(Date.now());

    }
}



class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = false;
        this.readDate = new Date();
    }

}

let book1 = new Book("Windmills of the Gods", "Novel", "Sidney Sheldon")
let book2 = new Book("Raja Yoga", "Body, Mind & Spirit", "Swami Vivekananda")
let book3 = new Book("The Diary of a Young Girl", "Autobiography", "Anne Frank")


let allBooks = new BookList([book1, book2, book3]);

let book4 = new Book("Harry Potter", "Fantasy Fiction", "J. K. Rowling");
allBooks.addBook(book4);
