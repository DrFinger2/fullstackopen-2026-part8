import useBooks from "../hooks/useBooks";
import BookTable from "../components/BookTable";

const BooksView = () => {
  const { books, loading } = useBooks();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Books</h2>
      <BookTable books={books} />
    </div>
  );
};

export default BooksView;
