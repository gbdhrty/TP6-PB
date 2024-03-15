import style from './Menu.module.css';

export function Menu ({ inputValue, onChangeInput }) {
  return (
    <header className={style.menuBar}>
      <h1>My Books</h1>
    </header>
  );
}