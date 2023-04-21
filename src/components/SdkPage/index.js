import React from 'react'
import sdks from '../../sdks'
import Sdk from './Sdk'
import styles from './SdkPage.module.css';

const SdkPage = () => {
    return (
        <div>
            <p className={styles.sdkPageTitle}>Get up and running fast with Aserto SDKs.</p>

            <div className={styles.sdksDiv}>
                {sdks.map((s) => 
                    <Sdk
                        key={s.title}
                        title={s.title}
                        icon={s.icon}
                        link={s.docs}
                        github={s.github}
                        docs={s.docs}
                    />
                )}
            </div>
        </div>    
    )
}

export default SdkPage