import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';

export interface BugButtonProps {
    className?: string
}

export const BugButton = (props: BugButtonProps) => {
    const { className = '' } = props
    const [error, setError] = useState(false)

    const throwError = () => setError(true)

    useEffect(() => {
        throw new Error()
    }, [error])
    return (
        <Button onClick={throwError} className={classNames('', {}, [className])}>
            throw error
        </Button>
    )
}