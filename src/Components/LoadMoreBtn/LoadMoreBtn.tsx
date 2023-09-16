import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }: any) => {
  const onBtnClick = () => loadMore(true);

  return (
    <div className={style.btnBox}>
      <button type="button" onClick={onBtnClick} className={style.btnStyle}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
