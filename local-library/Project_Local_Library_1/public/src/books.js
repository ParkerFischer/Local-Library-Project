function findAuthorById(authors, id) {
   return authors.find((foundAuthors) => foundAuthors.id === id);
}

function findBookById(books, id) {
   return books.find((currentBook) => currentBook.id === id);
}


function partitionBooksByBorrowedStatus(books) {
const borrowedBooks = [];
const returnedBooks = [];
const combinedBookArray = [];

   for (let currentBook of books){
      if(!currentBook.borrows[0].returned){
         borrowedBooks.push(currentBook)
         } else {
         returnedBooks.push(currentBook)
      }
   }

combinedBookArray.push(borrowedBooks, returnedBooks)
return combinedBookArray;
}

function getBorrowersForBook(book, accounts) {
   let bookBorrows = book.borrows;
   let allBorrowsForBook = [];

   for (currentReturn of bookBorrows){
      let currentReturnAccount = accounts.find((accountId) => accountId.id === currentReturn.id)
      currentReturnAccount[`returned`] = currentReturn.returned
      currentReturn = currentReturnAccount
      allBorrowsForBook.push(currentReturn)
    }

return allBorrowsForBook.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
