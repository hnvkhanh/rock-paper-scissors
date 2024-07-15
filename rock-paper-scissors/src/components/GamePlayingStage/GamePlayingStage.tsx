import { useEffect, useState } from 'react';
import get from 'lodash/get';
import { DEFAULT_CHOICES } from '../../config/choices';
import PlayerChoice from '../PlayerChoice/PlayerChoice';

import css from './GamePlayingStage.module.css'
import { getResults } from '../../utils/helpers';

const GamePlayingStage = ({ updateState, playerChoice, houseChoice }: {
  updateState: (updatedScore: number) => void;
  playerChoice: string | null;
  houseChoice: string
}) => {
  
  const [showHouseChoice, setShowHouseChoice] = useState(false);
  const updatedScore = getResults(playerChoice, houseChoice) === 'win' ? 1 : 0;

  useEffect(() => {
    const timeoutIdState = setTimeout(() => updateState(updatedScore), 5000);
    const timeoutIdShowChoice = setTimeout(() => setShowHouseChoice(true), 3000);
    return () => {
      clearTimeout(timeoutIdState);
      clearTimeout(timeoutIdShowChoice);
    };
  }, [updateState, updatedScore]);

  if (!playerChoice) return null;

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