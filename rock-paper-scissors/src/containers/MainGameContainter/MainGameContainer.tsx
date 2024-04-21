import Button from '../../components/Button/Button'
import PlayerChoice from '../../components/PlayerChoice/PlayerChoice'
import { DEFAULT_CHOICES } from '../../config/choices'
import css from './MainGameContainer.module.css'
type Props = {}

const MainGameContainer = (props: Props) => {
  return (
    <div className={css.container}>
      <div className={css.choicesContainer}>
        <div className={css.firstRow}>
          <PlayerChoice properties={DEFAULT_CHOICES.paper} />
          <PlayerChoice properties={DEFAULT_CHOICES.scissors} />
        </div>
        <div className={css.secondRow}>
          <PlayerChoice properties={DEFAULT_CHOICES.rock} />
        </div>
      </div>
      <div className={css.rules}>
        <Button buttonText="RULES" />
      </div>
    </div>
  )
}

export default MainGameContainer