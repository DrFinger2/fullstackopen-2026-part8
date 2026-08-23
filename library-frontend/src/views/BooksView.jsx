import { useState } from "react";

import useBooks from "../hooks/useBooks";
import useGenres from "../hooks/useGenres";
import BookTable from "../components/BookTable";
import ToggleButtonGroup from "../components/ToggleButtonGroup";

const BooksView = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const { books, loading: booksLoading } = useBooks({ genre: selectedGenre });
  const { genres, loading: genresLoading } = useGenres();

  if (booksLoading || genresLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Books</h2>
      {selectedGenre && (
        <p>
          in genre <strong>{selectedGenre}</strong>
        </p>
      )}
      <ToggleButtonGroup
        options={genres}
        selected={selectedGenre}
        onSelect={setSelectedGenre}
        clearLabel="all Genres"
      />
      <BookTable books={books} />
    </div>
  );
};

export default BooksView;
