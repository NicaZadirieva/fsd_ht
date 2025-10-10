import cn from 'classnames';
import styles from './Button.module.css';

export function Button({children, className, appearance = 'outlined', icon, ...props}) {
    return <button className={cn(className, styles.button, {
        [styles.outlined]: appearance == "outlined",
        [styles.shadowed]: appearance == "shadowed",
        [styles.coloured]: appearance == "coloured"
    })} {...props}>
        {children}
        </button>
}