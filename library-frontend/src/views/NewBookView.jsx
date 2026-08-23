import useAddBook from "../hooks/bookstore/useAddBook";
import NewBookForm from "../components/NewBookForm";

const NewBookView = () => {
  const { addBook } = useAddBook();

  return (
    <div>
      <h2>add book</h2>
      <NewBookForm onAddBook={addBook} />
    </div>
  );
};

export default NewBookView;
