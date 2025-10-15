import cn from 'classnames';
import styles from './InfoBox.module.css';
import { Button } from './ui/Button';
import { CloseButton } from './ui/CloseButton';
import { Icon } from '../../../assets/Icon';

export function InfoBox({text, onClose, onShow, className, ...props}) {
    const IconComponent = Icon['Confetti'];

    return (
        <div className={cn(className, styles['info-box'])}>
            <div className={styles['confetti-icon']}>
                <IconComponent />
            </div>
            {text}
            <Button className={styles["show__btn"]} onClick={onShow} appearance="coloured">Посмотреть</Button>
            <CloseButton onClick={onClose}/>
        </div>
    );
}