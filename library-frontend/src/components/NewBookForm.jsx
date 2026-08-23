import { useState } from "react";
import useField from "../hooks/useField";
import useNotification from "../hooks/useNotification";
const NewBookForm = ({ onAddBook }) => {
  const title = useField("text");
  const author = useField("text");
  const published = useField("number");
  const genreField = useField("text");
  const { error, success } = useNotification();
  const [genres, setGenres] = useState([]);

  const reset = () => {
    title.reset();
    author.reset();
    published.reset();
    genreField.reset();
    setGenres([]);
  };

  const submit = async (event) => {
    event.preventDefault();

    try {
      await onAddBook({
        title: title.field.value,
        author: author.field.value,
        published: published.field.value,
        genres,
      });
      reset();
      success(
        `'${title.field.value}' by '${author.field.value}' added to books section`,
      );
    } catch (err) {
      error(err.message);
    }
  };

  const addGenre = () => {
    setGenres(genres.concat(genreField.field.value));
    genreField.reset();
  };

  return (
    <form onSubmit={submit}>
      <div>
        <div>
          <label htmlFor="title">title</label>
        </div>
        <input id="title" {...title.field} />
      </div>
      <div>
        <div>
          <label htmlFor="author">author</label>
        </div>
        <input id="author" {...author.field} />
      </div>
      <div>
        <div>
          <label htmlFor="published">published</label>
        </div>
        <input id="published" {...published.field} />
      </div>
      <div>
        <div>
          <label htmlFor="genre">genre</label>
        </div>
        <input id="genre" {...genreField.field} />
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
