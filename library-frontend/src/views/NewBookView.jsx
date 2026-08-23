import useAddBook from "../hooks/useAddBook";
import NewBookForm from "../components/NewBookForm";

const NewBookView = (props) => {
  const { addBook } = useAddBook();

  if (!props.show) {
    return null;
  }

  return (
    <div>
      <h2>add book</h2>
      <NewBookForm onAddBook={addBook} />
    </div>
  );
};

export default NewBookView;
