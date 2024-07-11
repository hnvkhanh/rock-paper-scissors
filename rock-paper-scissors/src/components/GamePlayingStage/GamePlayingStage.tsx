import { useState } from 'react';
import get from 'lodash/get';
import { DEFAULT_CHOICES } from '../../config/choices';
import { randomChoice } from '../../utils/helpers';
import PlayerChoice from '../PlayerChoice/PlayerChoice';

import css from './GamePlayingStage.module.css'

const GamePlayingStage = ({ updateState, playerChoice }: { updateState: () => void; playerChoice: string | null }) => {
  const [showHouseChoice, setShowHouseChoice] = useState(false);
  if (!playerChoice) return null;
  setTimeout(() => updateState(), 5000);
  setTimeout(() => setShowHouseChoice(true), 3000);
  const houseChoice = randomChoice(Object.keys(DEFAULT_CHOICES));
  const houseChoiceComponent = showHouseChoice
    ? <PlayerChoice properties={get(DEFAULT_CHOICES, houseChoice)} />
    : <div className={css.choicePlaceholder}></div>;
  return <div className={css.container}>
    <div className={css.choice}>
      <PlayerChoice properties={get(DEFAULT_CHOICES, playerChoice)} />
      <p className={css.choiceText}>YOU PICKED</p>
    </div>

    <div className={css.choice}>
      {houseChoiceComponent}
      <p className={css.choiceText}>THE HOUSE PICKED</p>
    </div>
  </div>
}

export default GamePlayingStage;