import styles from './Tabs.module.css';
import cn from 'classnames';
import { TabButton } from './ui';
import { useState } from 'react';

export function Tabs({actions, className, ...props}) {
    const [activeTab, setActiveTab] = useState(actions[0]?.key);
    return (
        <div className={cn(className, styles.tabs)}>
            {actions?.map((action) => {
                return <TabButton className={styles.tab} appearance={activeTab == action.key ? "coloured": "shadowed"} key={action.key} counter={action.counter} onClick={() => { action.onClick(); setActiveTab(action.key) }}>{action.text}</TabButton>
            })}
        </div>
    );
}