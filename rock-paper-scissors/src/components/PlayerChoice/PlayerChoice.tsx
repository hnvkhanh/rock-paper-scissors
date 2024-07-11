import classNames from 'classnames'
import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from '../../config/choices'
import { ChoiceProperties } from '../../config/types'

import css from './PlayerChoice.module.css'

type Props = {
  properties: ChoiceProperties | null,
  onClick?: () => void,
}

const PlayerChoice = (props: Props) => {
  const { properties, onClick } = props
  if (!properties) return null;
  return (
    <div className={classNames({
      [css.container]: true,
      [css.paper]: properties.name === PAPER,
      [css.scissors]: properties.name === SCISSORS,
      [css.rock]: properties.name === ROCK,
      [css.lizard]: properties.name === LIZARD,
      [css.spock]: properties.name === SPOCK,
    })} onClick={onClick}>
      <div className={css.imageContainer}>
        <img src={properties.image} alt={properties.name} />
      </div>
    </div>
  )
}

export default PlayerChoice