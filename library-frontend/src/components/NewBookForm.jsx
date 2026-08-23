import { useState } from "react";
import useField from "../hooks/useField";

const NewBookForm = ({ onAddBook }) => {
  const title = useField("text");
  const author = useField("text");
  const published = useField("number");
  const genreField = useField("text");
  const [genres, setGenres] = useState([]);

  const submit = async (event) => {
    event.preventDefault();

    await onAddBook({
      title: title.field.value,
      author: author.field.value,
      published: published.field.value,
      genres,
    });

    title.reset();
    author.reset();
    published.reset();
    genreField.reset();
    setGenres([]);
  };

  const addGenre = () => {
    setGenres(genres.concat(genreField.field.value));
    genreField.reset();
  };

  return (
    <form onSubmit={submit}>
      <div>
        <div>title</div>
        <input {...title.field} />
      </div>
      <div>
        <div>author</div>
        <input {...author.field} />
      </div>
      <div>
        <div>published</div>
        <input {...published.field} />
      </div>
      <div>
        <input {...genreField.field} />
        <button onClick={addGenre} type="button">
          add genre
        </button>
      </div>
      <div>genres: {genres.join(" ")}</div>
      <button type="submit">create book</button>
    </form>
  );
};

export default NewBookForm;
