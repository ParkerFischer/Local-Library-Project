function getTotalBooksCount(books) {
  return books.length;
}


function getTotalAccountsCount(accounts) {
  return accounts.length;
}


function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => 
    {if (!book.borrows[0].returned) {acc++ }
    return acc}, 0)
}


function _groupHelper(arr, key){
  return arr.reduce((acc, obj) => {
    let genre = obj[key];
       if(acc[genre]) {
       acc[genre].push(obj);
       } else {acc[genre] = [obj]}
       return acc;}, []);
}


function getMostCommonGenres(books) {
  let booksByGenre = _groupHelper(books, `genre`)
  let genresCounted = []

    for (let genre in booksByGenre){
      let genreObj = {name : genre, count : booksByGenre[genre].length}
      genresCounted.push(genreObj)
    };

 return genresCounted.sort((genreA, genreB) => genreB.count > genreA.count ? 1 : -1).slice(0, 5)
}


function getMostPopularBooks(books) {
  return Object.entries(
      books.reduce((acc, book) => {
        acc[book.title] = book.borrows.length
        return acc}, {})) 
        .map(([name, count]) => ({name, count}))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
}


function getMostPopularAuthors(books, authors) {
  const popularAuthors = []
  for (selectedAuthor of authors) {
    const writtenWorks = books.filter((book) => book.authorId === selectedAuthor.id)
    popularAuthors.push({
      'name': (`${selectedAuthor.name.first} ${selectedAuthor.name.last}`),
      'count': writtenWorks.reduce((acc, book) => acc + book.borrows.length, 0)
    })
  }
  return popularAuthors.sort((a, b) => b['count'] - a['count']).slice(0, 5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
