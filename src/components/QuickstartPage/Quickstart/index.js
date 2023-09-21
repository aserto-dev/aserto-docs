import React from 'react'
import Link from '@docusaurus/Link'
import styles from './Quickstart.module.css'

const Sdk = ({ title, link, icon, description, docs }) => {
  return (
    <div className={styles.card}>
      <a href={link}>
        <img className={styles.cardImage} src={`/${icon}`} alt={title} />
      </a>
      <p className={styles.cardTitle}>{title}</p>
      <br />
      <p className={styles.cardDescription}>{description}</p>
      <Link href={docs}>
        <button className={styles.launchButton}>View Quickstart</button>
      </Link>
    </div>    
  )
}

export default Sdk