import useBooks from "../hooks/useBooks";
import BookTable from "../components/BookTable";

const BooksView = (props) => {
  const [books, state] = useBooks();

  if (!props.show) {
    return null;
  }
  if (state.loading) {
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
