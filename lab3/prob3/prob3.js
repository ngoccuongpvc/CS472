let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];

function addBook(title, author, ID) {
    const newBook = {
        title: title,
        author: author,
        ID: ID
    }
    if (!libraryBooks.find(book => book.ID == ID)) {
        libraryBooks.push(newBook);
    }
    return newBook;
}

function getTitles() {
    return libraryBooks.map(book => book.title).sort();
}

function findBooks(keyword) {
    const bookComparator = (book1, book2) => {
        if (book1.ID < book2.ID) {
            return -1;
        } else if (book1.ID === book2.ID) {
            return 0;
        } else {
            return 1;
        }
    }

    return libraryBooks.filter(book => book.title.includes(keyword)).sort(bookComparator);
}


console.log(addBook("The Road Ahead", "Bill Gates 2", 1235)); 
// { title: 'The Road Ahead', author: 'Bill Gates 2', ID: 1235 }
// ID 1235 exists in libraryBook => do not add this book
console.log(libraryBooks);

console.log(addBook("Head First Java", "Kathy Sierra", 9999)); 
// { title: 'Head First Java', author: 'Kathy Sierra', ID: 9999 }
// New book with ID 9999 should be added to libraryBook
console.log(libraryBooks);

console.log(getTitles());
// [
//     'Head First Java',
//     'Mockingjay: The Final Book of The Hunger Games',
//     'The Road Ahead',
//     'The Road Ahead',
//     'Walter Isaacson'
// ]

console.log(findBooks("The"));
// [
//     { title: 'The Road Ahead', author: 'Bill Gates', ID: 1235 },
//     {
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       author: 'Suzanne Collins',
//       ID: 3257
//     },
//     { title: 'The Road Ahead', author: 'Bill Gates', ID: 4268 }
// ]