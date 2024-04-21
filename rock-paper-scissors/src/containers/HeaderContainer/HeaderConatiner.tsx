import ScoreBoard from '../../components/ScoreBoard/ScoreBoard'
import css from './HeaderConatiner.module.css'

type Props = {}

const HeaderConatiner = (props: Props) => {

    return (
        <div className={css.container}>
            <div className={css.titles}>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSORS</span>
            </div>  
            <ScoreBoard />
        </div>
    )
}

export default HeaderConatiner