import useBooks from "../hooks/bookstore/useBooks";
import BookTable from "../components/BookTable";

const BooksView = () => {
  const { books, loading } = useBooks();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>books</h2>
      <BookTable books={books} />
    </div>
  );
};

export default BooksView;
