import { type ButtonHTMLAttributes, type FC } from 'react'
import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classNames'
export enum ThemeButton {
  CLEAR = 'clear'
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const { className = '', children, theme = ThemeButton.CLEAR, ...rest } = props
  return (
    <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...rest}>
      {children}
    </button>
  )
}
