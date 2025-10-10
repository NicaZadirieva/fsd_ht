import cn from 'classnames';
import styles from './Card.module.css';
import { Icon } from '../../../assets/Icon';

export function Card({className, icon, ...props}) {
    const IconComponent = Icon["StatisticsBonuses"];
    const MoreButtonComponent = Icon["MoreButton"];
    return (
        <div className={cn(className, styles.card)}>
            <IconComponent className={styles.icon}/>
            <div className={styles['card-content']}>
                <div className={styles['card-content__value']}>3 500</div>
                <div className={styles['card-content__description']}>Бонусов</div>
                 
            </div>
           <button className={styles['more--button']}><MoreButtonComponent /></button>
        </div>
    );
}