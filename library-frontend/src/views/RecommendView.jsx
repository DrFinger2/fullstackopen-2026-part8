import { useState } from "react";
import useMe from "../hooks/useMe";
import useBooks from "../hooks/useBooks";

const RecommendView = () => {
  const { user, loading: userLoading } = useMe();
  const [selectedGenre] = useState(user.favoriteGenre || null);
  const { books, loading } = useBooks({ genre: selectedGenre });

  if (userLoading || loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Recommendations</h2>
      <BookTable books={books} />
    </div>
  );
};
export default RecommendView;
