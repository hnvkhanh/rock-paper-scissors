import classNames from "classnames";
import { ReactNode } from "react";

import css from "./Button.module.css";

type Props = {
  children: ReactNode;
  filled?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { children, filled, onClick, className } = props;
  return (
    <div
      className={classNames(
        {
          [css.buttonOuter]: true,
          [css.filled]: filled,
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
