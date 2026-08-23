import useAddBook from "../hooks/useAddBook";
import NewBookForm from "../components/NewBookForm";

const NewBookView = () => {
  const { addBook } = useAddBook();

  const handleAddBook = async (title, author, published, genres) => {
    await addBook(title, author, published, genres);
  };

  return (
    <div>
      <h2>Add book</h2>
      <NewBookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default NewBookView;
