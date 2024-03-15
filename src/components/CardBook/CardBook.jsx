import style from './CardBook.module.css';

export function CardBook({ 
  cover,
  title,
  author,
  genre,
  language,
  rating
}) {
  return (
    <div className={style.card}>
      <img className={style.cardImg} src={cover} />
      <h3>{title}</h3>
      <p>Autor: {author}</p>
      <p>Gênero: {genre}</p>
      <p>Idioma: {language}</p>
      <p>Avaliação: {rating}/5</p>
    </div>
  );
}