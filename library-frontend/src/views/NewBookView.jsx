import useAddBook from "../hooks/bookstore/useAddBook";
import NewBookForm from "../components/NewBookForm";
import useUser from "../hooks/authentication/useUser";

const NewBookView = () => {
  const { isLoggedIn } = useUser();
  const { addBook } = useAddBook();

  if (!isLoggedIn) {
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
