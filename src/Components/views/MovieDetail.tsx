import React, { useEffect, useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import movieDetailFetch from "../api/movieDetailFetch";
import style from "./MovieDetail.module.css";
import Credits from "../Credits";
import MovieDetailCard from "../MovieDetailCard";
import Reviews from "../Reviews";
import { IMovieDetail } from "../types/types";

const MovieDetail = () => {
  const [movie, setMovie] = useState<IMovieDetail | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    movieDetailFetch(id!)
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  }, [id]);

  const onBackBtnClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button type="button" className={style.button} onClick={onBackBtnClick}>
        Back
      </button>
      <MovieDetailCard movie={movie!} />
      <div>
        <ul className={style.list}>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : style.links
              }
              to="cast"
            >
              Actors
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.active : style.links
              }
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<Credits id={id!} />} />
        <Route path="reviews" element={<Reviews id={id!} />} />
      </Routes>
    </div>
  );
};

export default MovieDetail;
