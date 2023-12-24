import { Theme, useTheme } from 'app/providers/ThemeProvider'
import styles from './ThemeSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme()

  const { className = '' } = props
  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(styles.ThemeSwitcher, {}, [className])}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
