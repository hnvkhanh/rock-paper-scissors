import ScoreBoard from "../../components/ScoreBoard/ScoreBoard";
import css from "./HeaderConatiner.module.css";

const HeaderConatiner = ({ score }: { score: number }) => {
  return (
    <div className={css.container}>
      <div className={css.titles}>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <ScoreBoard score={score} />
    </div>
  );
};

export default HeaderConatiner;
