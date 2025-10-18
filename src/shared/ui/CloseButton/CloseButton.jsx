import cn from 'classnames';
import styles from "./CloseButton.module.css";
import { Icon } from '../../../assets/Icon';

export function CloseButton({className, ...props}) {
    const IconComponent = Icon["CloseIcon"];
    return <button className={cn(className, styles["close-button"])} {...props}><IconComponent/></button>
}