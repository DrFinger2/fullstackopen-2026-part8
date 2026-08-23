import useAuthors from "../hooks/bookstore/useAuthors";
import useEditAuthor from "../hooks/bookstore/UseEditAuthors";
import AuthorTable from "../components/AuthorTable";
import EditAuthorForm from "../components/EditAuthorForm";
import useUser from "../hooks/authentication/useUser";

const AuthorsView = () => {
  const { isLoggedIn } = useUser();
  const { authors, loading } = useAuthors();
  const { editAuthor } = useEditAuthor();

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
