import classNames from 'classnames'
import css from './Button.module.css'

type Props = {
  buttonText: string,
  filled?: boolean
}

const Button = (props: Props) => {
  const { buttonText, filled } = props
  return (
    <div className={classNames({
      [css.buttonOuter]: true,
      [css.filled]: filled
    })}>{buttonText}</div>
  )
}

export default Button