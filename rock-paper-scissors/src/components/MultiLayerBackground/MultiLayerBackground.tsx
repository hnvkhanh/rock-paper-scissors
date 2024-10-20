import css from "./MultiLayerBackground.module.css";

const MultiLayerBackground = () => {
  return (
    <>
      <div className={css.background}></div>
      <div className={css.background}></div>
      <div className={css.background}></div>
    </>
  );
};

export default MultiLayerBackground;
