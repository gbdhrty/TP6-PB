import { useState, useEffect } from 'react';
import { BookList } from '../components/BookList/BookList';
import { Menu } from '../components/Menu/Menu';

export function BooksListPage() {
  const [books, setBooks] = useState(null);
  const [bookFilter, setBookFilter] = useState("");

  useEffect(() => {
    async function loadBooks() {
      const url = 'https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json';
      const request = await fetch(url);
      const booksJson = await request.json();
      setBooks(Object.values(booksJson));
    }

    loadBooks();
  }, []);

  function handleChangeInput(newValue) {
    setBookFilter(newValue);
  }

  function filteredBookList() {
    let bookList = [...books];
    if (bookFilter.length > 1) {
      bookList = bookList.filter(book => {
        return book.title.toLowerCase().includes(bookFilter) ||
               book.author.toLowerCase().includes(bookFilter) ||
               book.genre.toLowerCase().includes(bookFilter);
      });
    }
    return bookList;
  }

  return (
    <div>
      <Menu />
      {books && <BookList books={filteredBookList()} 
                  value={bookFilter} 
                  onChangeInput={handleChangeInput} 
                />}
    </div>
  );
}