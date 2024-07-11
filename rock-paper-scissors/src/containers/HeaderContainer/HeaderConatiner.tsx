import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import css from "./HeaderConatiner.module.css";

const HeaderConatiner = () => {
  return (
    <div className={css.container}>
      <div className={css.titles}>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <ScoreBoard score={0} />
    </div>
  );
};

export default HeaderConatiner;
