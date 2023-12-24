import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';

export interface PageErrorProps {
    className?: string
}

export const PageError = (props: PageErrorProps) => {
    const { t } = useTranslation()
    const { className = '' } = props



    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <Button onClick={() => location.reload()}>{t('Обновить')}</Button>
        </div>
    )
}