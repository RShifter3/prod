import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

export interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className = '' } = props
  const [collapsed, setCollapsed] = useState(false)

  const onClose = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div
      className={classNames(styles.Sidebar,
        { [styles.collapsed]: collapsed }, [className])}>
      <Button onClick={onClose}>&#10006;</Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
