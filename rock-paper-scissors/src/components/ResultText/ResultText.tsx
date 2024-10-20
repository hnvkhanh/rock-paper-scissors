import { DRAW } from "../../config/types";
import css from "./ResultText.module.css";

const ResultText = ({ result }: { result: string }) => {
  if (result === DRAW) {
    return <p className={css.result}>IT'S A DRAW</p>
  }
  return <p className={css.result}>YOU {result}</p>
};

export default ResultText;
