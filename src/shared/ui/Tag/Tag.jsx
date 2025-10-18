import cn from 'classnames';
import styles from './Tag.module.css';
import { Icon } from '@/assets/Icon';

export function Tag({className, children, appearance, icon, ...props}) {
    const IconComponent = Icon[icon];
    return <span className={cn(className, styles.tag, {
        [styles.shadowed]: appearance == "shadowed",
        [styles.outlined]: appearance == "outlined",
        [styles.coloured]: appearance == "coloured"
    })}>
        {icon && <IconComponent className={styles.icon}/>}
        {children}
    </span>
}