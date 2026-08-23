import { useQuery } from "@apollo/client/react";
import { GET_ALL_AUTHORS } from "../queries";

const useAuthors = () => {
  const { data, loading, error } = useQuery(GET_ALL_AUTHORS);

  return {
    authors: data?.allAuthors ?? [],
    loading: loading,
    error: error,
  };
};

export default useAuthors;
