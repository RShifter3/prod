import styles from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'

export interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className = '' } = props

  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button className={classNames(styles.LangSwitcher, {}, [className])} onClick={toggle}>{t('Язык')}</Button>
  )
}
