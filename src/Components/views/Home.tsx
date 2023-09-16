import HomeGallery from "../HomeGallery";
import LoadMoreBtn from "../LoadMoreBtn";
import homePageFetch from "../api/homePageFetch";
import { useEffect, useState } from "react";
import { IHomeGallery } from "../types/types";

const Home = () => {
  const [homePageGallery, setHomePageGallery] = useState<IHomeGallery[] | null>(
    null
  );
  const [pageGallery, setPageGallery] = useState<number>(1);

  useEffect(() => {
    homePageFetch(pageGallery).then((response) => {
      return homePageGallery === null
        ? setHomePageGallery(response.results)
        : setHomePageGallery((prevState) => [
            ...prevState!,
            ...response.results,
          ]);
    });
  }, [pageGallery]);

  const onLoadMoreBtnClick = () => setPageGallery((prevState) => prevState + 1);

  return (
    <>
      <HomeGallery gallery={homePageGallery!} />
      {homePageGallery && <LoadMoreBtn loadMore={onLoadMoreBtnClick} />}
    </>
  );
};

export default Home;
