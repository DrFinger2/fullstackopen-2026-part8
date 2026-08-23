// hooks/useBooks.js
import { useQuery } from "@apollo/client/react";
import { GET_ALL_BOOKS } from "../../queries";

const useBooks = (filters) => {
  const { data, loading, error } = useQuery(GET_ALL_BOOKS, {
    variables: filters,
  });

  return {
    books: data?.allBooks ?? [],
    loading,
    error,
  };
};

export default useBooks;
