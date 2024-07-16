## Practice ES6 HOF (Foreach, Map, Filter, Reduce) / For-in & For-of

**Given an array of objects `books`, please complete the following questions**

```javascript
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
```

**Questions:**

1. **Filter by Genre:** Using the `filter` method, create a new array containing books that belong to the "Science Fiction" genre.

2. **Sort by Year:** Sort the `books` array by the publication year in ascending order using the `sort` method.

3. **Total Books Published:** Calculate the total number of books in the `books` array using the `reduce` method.

4. **List Authors:** Create an array of unique author names from the `books` array using the `map` and `Set` techniques.

5. **Find Classics:** Use the `find` method to find the first book in the "Classics" genre.

6. **Titles with Length:** Generate an array of book titles that have a length (number of characters) greater than 15.

7. **Group by Genre:** Group the books in the `books` array by genre, creating an object where each key is a genre and the value is an array of books belonging to that genre.

8. **Oldest Book:** Find the book with the earliest publication year using the `reduce` method.

9. **Book Descriptions:** Create an array of strings, each containing the book title, author, and publication year, formatted as "Title by Author (Year)."

10. **Remove Duplicates:** Create a new array containing books with unique titles. If there are duplicate titles, keep only the first occurrence.
