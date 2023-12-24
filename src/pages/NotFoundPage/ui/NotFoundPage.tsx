import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classNames';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

export interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { t } = useTranslation()
    const { className = '' } = props
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
            <PageLoader />
        </div>
    )
}