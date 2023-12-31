import style from "./HomeGallery.module.css";
import { Link, useLocation } from "react-router-dom";
import { IHomeGallery } from "../types/types";

const HomeGallery = ({ gallery }: { gallery: IHomeGallery[] }) => {
  const location = useLocation();

  return (
    <ul className={style.homeList}>
      {gallery?.map((item) => (
        <li key={`id:${item.id}`} className={style.homeItem}>
          <Link to={`/movie/${item.id}`} state={location}>
            <img
              className={style.homeImg}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              width="360"
              height="500"
            />
            <h1 className={style.homeTitle}>
              {item.title ? item.title : item.name}
            </h1>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomeGallery;
