import { useEffect, useState } from "react";
import style from "./Reviews.module.css";
import reviewsFetch from "../api/reviewsFetch";
import { IReviews } from "../types/types";

const Reviews = ({ id }: { id: string }) => {
  const [reviews, setReviews] = useState<IReviews[]>([]);

  useEffect(() => {
    reviewsFetch(id)
      .then((response) => setReviews(response.results))
      .catch((err) => console.error(err));
  }, [id]);

  return reviews?.length > 0 ? (
    <ul className={style.list}>
      {reviews?.map((review) => (
        <li key={review.id}>
          <h3 className={style.author}>{review.author}</h3>
          <p className={style.date}>Date: {review.created_at}</p>
          <p className={style.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <h3 className={style.noReviews}>No reviews yet</h3>
  );
};

export default Reviews;
