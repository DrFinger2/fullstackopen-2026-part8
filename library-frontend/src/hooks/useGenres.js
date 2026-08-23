import { useQuery } from "@apollo/client/react";
import { GET_ALL_GENRES } from "../queries";

const useGenres = () => {
  const { data, loading, error } = useQuery(GET_ALL_GENRES);

  return {
    genres: data?.allGenres ?? [],
    loading,
    error,
  };
};

export default useGenres;
