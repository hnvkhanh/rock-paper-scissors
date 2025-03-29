import classNames from "classnames";
import MultiLayerBackground from "../MultiLayerBackground/MultiLayerBackground";
import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../../config/choices";
import { ChoiceProperties } from "../../config/types";

import css from "./PlayerChoice.module.css";

type Props = {
  properties: ChoiceProperties | null;
  onClick?: () => void;
  hasBackground?: boolean;
  containerClassName?: string;
};

const PlayerChoice = (props: Props) => {
  const { properties, onClick, hasBackground, containerClassName } = props;
  if (!properties) return null;
  return (
    <div
      className={classNames(
        {
          [css.container]: true,
          [css.paper]: properties.name === PAPER,
          [css.scissors]: properties.name === SCISSORS,
          [css.rock]: properties.name === ROCK,
          [css.lizard]: properties.name === LIZARD,
          [css.spock]: properties.name === SPOCK,
        },
        containerClassName
      )}
      onClick={onClick}
    >
      <div className={css.imageContainer}>
        <img src={properties.image} alt={properties.name} />
      </div>
      {hasBackground && <MultiLayerBackground />}
    </div>
  );
};

export default PlayerChoice;
