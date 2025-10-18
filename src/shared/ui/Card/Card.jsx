import cn from 'classnames';
import styles from './Card.module.css';
import { Icon } from '@/assets/Icon';

export function Card({className, icon, attributeDesc, attributeValue, onMoreClick, ...props}) {
    const IconComponent = Icon[icon];
    const MoreButtonComponent = Icon["MoreButton"];
    return (
        <div {...props} className={cn(className, styles.card)}>
            <IconComponent className={styles.icon}/>
            <div className={styles['card-content']}>
                <div className={styles['card-content__value']}>{attributeValue}</div>
                <div className={styles['card-content__description']}>{attributeDesc}</div>
                 
            </div>
           {onMoreClick && <button onClick={onMoreClick} className={styles['more--button']}><MoreButtonComponent /></button>}
        </div>
    );
}