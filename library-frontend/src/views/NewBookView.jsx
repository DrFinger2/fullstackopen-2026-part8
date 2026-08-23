import useAddBook from "../hooks/useAddBook";
import NewBookForm from "../components/NewBookForm";

const NewBookView = () => {
  const { addBook } = useAddBook();

  return (
    <div>
      <h2>Add book</h2>
      <NewBookForm onAddBook={addBook} />
    </div>
  );
};

export default NewBookView;
