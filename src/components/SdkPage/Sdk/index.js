import React from 'react'
import Link from '@docusaurus/Link'
import styles from './Sdk.module.css'

const Sdk = ({ title, link, icon, github, docs }) => {
  return (
    <div className={styles.sdkCard}>
      <a href={link}>
        <img className={styles.sdkImage} src={`/${icon}`} alt={title} />
      </a>
      <p className={styles.sdkTitle}>{title}</p>
      <Link className={styles.sdkGithubLink} href={github} target='_self'>
        GitHub
      </Link>
      <Link href={docs}>
        <button className={styles.launchButton}>View Docs</button>
      </Link>
    </div>    
  )
}

export default Sdk