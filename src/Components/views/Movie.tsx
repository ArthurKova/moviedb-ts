import { useState } from "react";
import style from "./Movie.module.css";
import MovieList from "../MovieList";
import { DebounceInput } from "react-debounce-input";

const Movie = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <DebounceInput
        className={style.movieInput}
        autoFocus
        autoComplete="true"
        debounceTimeout={1000}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MovieList userQuery={query} />
    </>
  );
};

export default Movie;
