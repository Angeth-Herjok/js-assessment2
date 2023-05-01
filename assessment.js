const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

// Write a JavaScript program that performs the following tasks:
// 1. Create a function called getAvailableBooks that returns an array of all available
// books.
 
function getAvailableBooks(){
    let empty=[]
    for(let book of books){
        if(books.tittle){
            empty.push(books.tittle)
        }
    }
    return empty
}
console.log(getAvailableBooks());
// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
function getBooksByAuthor(Homer){
    let emptyArray=[]
    for(let authorbook of books){
        if(books.author){
            emptyArray.push(author.books)
        }
    }
    return emptyArray
}
console.log(getBooksByAuthor(books));
// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
let newBook=[{title:"Born a crime",author:"Trevor Noah",publicationYear:"1986",isAvailable:"true"}]
function addNewBook(books){
    let emptynew=[]
    for(newBook in books){
        if(newBook===newBook){
            emptynew.push(newBook)
        }
    }
    return emptynew
}
console.log(addNewBook(newBook));



// 4. Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
function checkoutBook(title){
    // books.forEach(item)
    if(books.title !=isAvailable){
        console.log("the book is not available");
    }
    else{
        console.log("book is available");
    }
} 
console.log(checkoutBook())
// 5. Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(title){
    // books.forEach(books)
    if(books.title !=isAvailable){
        console.log("the book does not belong to the library");
    }
    else{
        console.log("belongs to the library");
    }
}
console.log(returnBook());