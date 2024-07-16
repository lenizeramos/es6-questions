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
console.log(scienceFictionBooks);

//**2. Sort by Year:**

//const sortedBooksByYear =

//**3. Total Books Published:**

//const totalBooks =

//**4. List Authors:**

//const uniqueAuthors =

//**5. Find Classics:**

//const firstClassicBook =

//**6. Titles with Length:**

//const longTitles =

//**7. Group by Genre:**

//const booksGroupedByGenre =

//**8. Oldest Book:**

//const oldestBook =

//**9. Book Descriptions:**

//const bookDescriptions =

//**10. Remove Duplicates:**

//const uniqueTitleBooks =
