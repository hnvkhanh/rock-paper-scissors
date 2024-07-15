import css from "./GameEndStage.module.css";

const GameEndStage = ({ score, playerChoice, houseChoice, updateState }: {
  score: number,
  playerChoice: string | null,
  houseChoice: string,
  updateState: () => void
}) => {
  console.log(score, playerChoice, houseChoice);
  setTimeout(() => updateState(), 5000);
  return <div style={{ color: 'white' }}>placeholder</div>
};

export default GameEndStage;