import { Link, type LinkProps } from 'react-router-dom'
import styles from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames'
import { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { className = '', to, children, theme = AppLinkTheme.PRIMARY, ...rest } = props
  return (
    <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...rest}>
      {children}
    </Link>
  )
}

export default AppLink
