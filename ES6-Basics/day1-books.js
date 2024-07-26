const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genres: ["Fiction", "Classics"],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Classics"],
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genres: ["Fiction", "Science Fiction"],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genres: ["Fiction", "Classics", "Romance"],
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genres: ["Fiction", "Fantasy"],
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genres: ["Fiction", "Classics"],
  },
];

// Example
//**1. Filter by Genre:**

const scienceFictionBooks = books.filter((book) =>
  book.genres.includes("Science Fiction")
);
//console.log(scienceFictionBooks);

//**2. Sort by Year:**

const sortedBooksByYear = books.toSorted((a, b) => {
  return a.year - b.year;
});
//console.log(sortedBooksByYear);

//**3. Total Books Published:**

const totalBooks = books.reduce((accumulator) => {
  return accumulator + 1;
}, 0);
//console.log(totalBooks);

//const totalBooksLength = books.length;
//console.log(totalBooksLength);

//**4. List Authors:**
/*
const authors = books.map((book) => book.author) // extrai os autores do array books
const uniqueAuthors = new Set(authors) // pego o set desse novo array criado
*/
const uniqueAuthors = new Set(
  books.map((book) => {
    return book.author;
  })
);
//console.log(uniqueAuthors);

//**5. Find Classics:**

const firstClassicBook = books.find((book) => {
  return book.genres.includes("Classics");
});
//console.log(firstClassicBook);

//**6. Titles with Length:**

const longTitles = books
  .filter((book) => {
    return book.title.length > 15;
  })
  .map((book) => book.title);

//console.log(longTitles);

//**7. Group by Genre:**

const booksGroupedByGenre = books.reduce((booksGrouped, currentBook) => {
  currentBook.genres.forEach((genre) => {
    if (!booksGrouped.hasOwnProperty(genre)) {
      booksGrouped[genre] = []; // nao tem como acessar uma propriedade por um ponto(dot notation) se a prop ainda nao existe, por isso acessamos como se fosse um vetor. eh como se eu tivesse dizendo crie essa propriedade e atribua esse valor.
    }
    booksGrouped[genre].push(currentBook);
  });
  return booksGrouped;
}, {});

//console.log(booksGroupedByGenre);

//**8. Oldest Book:**

const oldestBook = books.reduce((oldest, currentBook) => {
  if (oldest.year > currentBook["year"]) {
    return currentBook;
  }
  return oldest;
});
//console.log(oldestBook);

//**9. Book Descriptions:**

const bookDescriptions = books.map((book) => {
  return `${book.title} by ${book.author} (${book.year}).`;
});
//console.log(bookDescriptions);

//**10. Remove Duplicates:**

//const uniqueTitleBooks = new Set(books.map((book) => {return book.title}))

const uniqueTitleBooks = books.reduce((titles, currentBook) => {
  if (!titles.includes(currentBook.title)) {
    titles.push(currentBook.title);
  }
  return titles;
}, []);

//console.log(uniqueTitleBooks);
