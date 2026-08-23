import useAuthors from "../hooks/bookstore/useAuthors";
import useEditAuthor from "../hooks/bookstore/UseEditAuthors";
import AuthorTable from "../components/AuthorTable";
import EditAuthorForm from "../components/EditAuthorForm";

const AuthorsView = ({ show, isLoggedIn }) => {
  const { authors, loading } = useAuthors();
  const { editAuthor } = useEditAuthor();

  if (!show) {
    return null;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>authors</h2>
      <AuthorTable authors={authors} />
      {isLoggedIn && (
        <EditAuthorForm authors={authors} onEditAuthor={editAuthor} />
      )}
    </div>
  );
};

export default AuthorsView;
