import { classNames } from 'shared/lib/classNames'
import styles from './Navbar.module.scss'
import AppLink from 'shared/ui/AppLink/AppLink'

export interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className = '' } = props
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to={'/'} className={styles.mainLink}>Главная</AppLink>
        <AppLink to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  )
}
