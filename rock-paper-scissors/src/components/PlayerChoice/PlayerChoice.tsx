import classNames from 'classnames'
import css from './PlayerChoice.module.css'

type Props = {
  properties: {
    name: string,
    image: string,
    defeats: string[],
  },
}

const PlayerChoice = (props: Props) => {
  const { properties } = props
  return (
    <div className={classNames({
      [css.container]: true,
      [css.paper]: properties.name === 'paper',
      [css.scissors]: properties.name === 'scissors',
      [css.rock]: properties.name === 'rock',
      [css.lizard]: properties.name === 'lizard',
      [css.spock]: properties.name === 'spock',
    })}>
      <div className={css.imageContainer}>
        <img src={properties.image} alt={properties.name} />
      </div>
    </div>
  )
}

export default PlayerChoice