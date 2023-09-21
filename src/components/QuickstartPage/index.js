import React from 'react'
import sdks from '../../quickstarts'
import Quickstart from './Quickstart'
import styles from './QuickstartPage.module.css';

const QuickstartPage = () => {
    return (
        <div>
            <p className={styles.pageTitle}>Get started in 5 minutes with one of these quickstarts.</p>

            <div className={styles.wrapper}>
                {sdks.map((s) => 
                    <Quickstart
                        key={s.title}
                        title={s.title}
                        icon={s.icon}
                        link={s.docs}
                        description={s.description}
                        docs={s.docs}
                    />
                )}
            </div>
        </div>    
    )
}

export default QuickstartPage