import { useEffect, useState } from "react";
import creditsFetch from "../api/creditsFetch";
import style from "./Credits.module.css";
import defaultImg from "./default.jpg";
import { ICredits } from "../types/types";

const Credits = ({ id }: { id: string }) => {
  const [cast, setCast] = useState<ICredits[]>([]);

  useEffect(() => {
    creditsFetch(id)
      .then((response) => setCast(response.cast))
      .catch((err) => console.log(err.message));
  }, []);

  return cast.length > 0 ? (
    <ul className={style.list}>
      {cast!.map((el) => (
        <li key={el.id} className={style.item}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w400/${el?.profile_path}`
                : defaultImg
            }
            alt={el.original_name}
            width="350"
            height="500"
            className={style.img}
          />
          <h2 className={style.title}> {el.original_name}</h2>
          <p className={style.character}>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  ) : (
    <h1>Page not found</h1>
  );
};

export default Credits;
