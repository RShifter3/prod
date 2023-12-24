import styles from './PageLoader.module.scss'
import { classNames } from 'shared/lib/classNames';

export interface PageLoaderProps {
    className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className = '' } = props
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <span className={classNames(styles.loader)}></span>
        </div>
    )
}