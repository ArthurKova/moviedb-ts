import { ICreditsFetch } from "../types/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmEyNzQyYzZiYTk5ZTVkMTEwMmE3YjQ3YTA0YTVmYyIsInN1YiI6IjY0ZGRkYTQ0NWFiODFhMDBmZmMxMGM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tk7cbobDh3q7X1pGQiypiDwD_ww2nhv7cXS8WMzubrQ",
  },
};

const creditFetch = (id: string): Promise<ICreditsFetch> => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  ).then((response) => response.json());
};

export default creditFetch;
