import useBooks from "../hooks/bookstore/useBooks";
import BookTable from "../components/BookTable";

const BooksView = (show, isLoggedIn) => {
  const { books, loading } = useBooks();

  if (!show) {
    return null;
  }
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
