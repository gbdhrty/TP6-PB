import { CardBook } from '../CardBook/CardBook';
import style from './BookList.module.css';

export function BookList({ books, inputValue, onChangeInput }) {
  return (
    <div className={style.listContainer}>
      <div className={style.listFilter}>
        <span className="material-symbols-outlined">
          search
        </span>
        <input
          data-cy="filterInput"
          className={style.filterInput}
          type="text" 
          placeholder="Pesquisar por autor, título ou gênero"
          value={inputValue}
          onChange={event => {
            onChangeInput(event.target.value);
          }}
        />
      </div>
      {books.length > 0 ? 
      <ul className={style.bookList}>
        {books.map(book => {
          return (
            <li key={book.ISBN} data-cy="booksList">
              <CardBook {...book} />
            </li>
          );
        })}
      </ul> : <p>Nenhum livro encontrado correspondente à sua pesquisa.</p>}
    </div>
  );
}