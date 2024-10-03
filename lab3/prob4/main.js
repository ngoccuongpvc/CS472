
import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from "./data.js";

const javaBook = {
    title: "Java",
    id: 1
};

if (add_item(javaBook)) {
    console.log(`Added ${javaBook.title} succesfully`);
} else {
    console.log(`Can not add book ${javaBook.title}`);
}

console.log(get_items());
// [ { title: 'Java', id: 1 } ]

if (add_item(javaBook)) {
    console.log(`Added ${javaBook.title} succesfully`);
} else {
    console.log(`Can not add book ${javaBook.title}`);
}

console.log(get_items());
// [ { title: 'Java', id: 1 } ]

const pythonBook = {
    title: "Python",
    id: 2
};

const javascriptBook = {
    title: "JavaScript",
    id: 3
}

add_item(pythonBook);
add_item(javascriptBook);
console.log(get_items());
// [
//     { title: 'Java', id: 1 },
//     { title: 'Python', id: 2 },
//     { title: 'JavaScript', id: 3 }
// ]

if (update_item_title_by_id(pythonBook.id, "Introduction to Python")) {
    console.log(`Successfully updated book id ${pythonBook.id} title`);
} else {
    console.log(`Can not update title of book id ${pythonBook.id}`);
}
console.log(get_items());
// [
//     { title: 'Java', id: 1 },
//     { title: 'Introduction to Python', id: 2 },
//     { title: 'JavaScript', id: 3 }
// ]

const invalidBookId = 999;
if (update_item_title_by_id(invalidBookId, "Test Book")) {
    console.log(`Successfully updated book id ${invalidBookId} title`);
} else {
    console.log(`Can not update title of book id ${invalidBookId}`);
}
console.log(get_items());
// [
//     { title: 'Java', id: 1 },
//     { title: 'Introduction to Python', id: 2 },
//     { title: 'JavaScript', id: 3 }
// ]

if (delete_item_by_id(javaBook.id)) {
    console.log(`Successfully deleted book id ${javaBook.id} title`);
} else {
    console.log(`Can not delete title of book id ${javaBook.id}`);
}
// Successfully deleted book id 1 title
console.log(get_items());
// [
//     { title: 'Introduction to Python', id: 2 },
//     { title: 'JavaScript', id: 3 }
// ]

if (delete_item_by_id(javaBook.id)) {
    console.log(`Successfully deleted book id ${javaBook.id} title`);
} else {
    console.log(`Can not delete title of book id ${javaBook.id}`);
}
// Can not update title of book id 1
console.log(get_items());
// [
//     { title: 'Introduction to Python', id: 2 },
//     { title: 'JavaScript', id: 3 }
// ]

console.log(`Title of book id ${pythonBook.id} is`, get_item_title_by_id(pythonBook.id));
// Title of book id 2 is Introduction to Python

console.log(`Title of book id ${javascriptBook.id} is`, get_item_title_by_id(javascriptBook.id));
// Title of book id 3 is JavaScript

console.log(`Title of book id ${javaBook.id} is`, get_item_title_by_id(javaBook.id));
// Title of book id 1 is "" -> this book is deleted earlier