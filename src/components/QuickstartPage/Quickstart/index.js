import React from 'react'
import Link from '@docusaurus/Link'
import styles from './Quickstart.module.css'
import { ReactSVG } from 'react-svg'

const Sdk = ({ title, link, icon, description, docs }) => {
  return (
    <div className={styles.card}>
      <Link href={docs}>
        {
          icon === 'react.svg' ? 
          <img className={styles.cardImage} src={`/quickstarts/${icon}`} alt={title} /> :
          <div className={styles.cardImage}>
            <ReactSVG src={`/quickstarts/${icon}`} alt={title} />
          </div>
        }
        <p className={styles.cardTitle}>{title}</p>
        <br />
        <p className={styles.cardDescription}>{description}</p>
        <Link href={docs}>
          <button className={styles.launchButton}>View Quickstart</button>
        </Link>
      </Link>
    </div>
  )
}

export default Sdk