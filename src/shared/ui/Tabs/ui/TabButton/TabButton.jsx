import cn from 'classnames';
import styles from './TabButton.module.css';
import { Icon } from '../../../../../assets/Icon';

export function TabButton({children, className, appearance = 'outlined', icon, counter, ...props}) {
    const Counter = <span className={styles.counter}>{counter}</span>;
    const IconComponent = Icon[icon];
    return <button className={cn(className, styles.button, {
        [styles.outlined]: appearance == "outlined",
        [styles.shadowed]: appearance == "shadowed",
        [styles.coloured]: appearance == "coloured"
    })} {...props}>
        {icon && <IconComponent />}
        {children}
        {counter && Counter}
        </button>
}