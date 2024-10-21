import css from './ScoreBoard.module.css'

type Props = { score: number }

const ScoreBoard = (props: Props) => {
  const { score = 0 } = props
  return (
    <div className={css.container}>
      <div>SCORE</div>
      <div className={css.score}>{score}</div>
    </div>
  )
}

export default ScoreBoard