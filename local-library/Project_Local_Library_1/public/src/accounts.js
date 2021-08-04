function findAccountById(accounts, id) {
return accounts.find((account) => account.id === id);}


function sortAccountsByLastName(accounts) {
   return accounts.sort((account1, account2) => 
   account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1);
}


function getTotalNumberOfBorrows({id}, books) {
 let booksBorrowed = 0
  for (currentBook of books){
    for (user of currentBook.borrows){
      if (user.id === id) {
        booksBorrowed++
      }
    }
  }
return booksBorrowed;
}


function getBooksPossessedByAccount({id}, books, authors) {
let booksCheckedOut = books.filter((currentBook) => currentBook.borrows[0].id === id && !currentBook.borrows[0].returned);
  
   for (let bookFound of booksCheckedOut){
   let currentBooksAuthor = authors.find((author) => author.id === bookFound.authorId)
  
   bookFound[`author`] = currentBooksAuthor;
  }
return booksCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
