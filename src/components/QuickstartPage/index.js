import React from 'react'
import quickstarts from '../../quickstarts'
import Quickstart from './Quickstart'
import styles from './QuickstartPage.module.css'

const QuickstartPage = () => {
  return (
    <div>
      <p className={styles.pageTitle}>
        Get started in 5 minutes with one of these quickstarts.
      </p>

      <hr />
      <h2 className={styles.pageSubtitle}>End-to-end samples</h2>
      <div className={styles.wrapper}>
        {quickstarts
          .filter((q) => q.category === 'end-to-end-app')
          .map((s) => (
            <Quickstart
              key={s.title}
              title={s.title}
              icon={s.icon}
              link={s.docs}
              description={s.description}
              docs={s.docs}
            />
          ))}
      </div>

      <hr />
      <h2 className={styles.pageSubtitle}>Authorization templates</h2>
      <div className={styles.wrapper}>
        {quickstarts
          .filter((q) => q.category === 'template')
          .map((s) => (
          <Quickstart
            key={s.title}
            title={s.title}
            icon={s.icon}
            link={s.docs}
            description={s.description}
            docs={s.docs}
          />
        ))}
      </div>

      <hr />
      <h2 className={styles.pageSubtitle}>Tutorials</h2>
      <div className={styles.wrapper}>
        {quickstarts
          .filter((q) => q.category === 'tutorial')
          .map((s) => (
          <Quickstart
            key={s.title}
            title={s.title}
            icon={s.icon}
            link={s.docs}
            description={s.description}
            docs={s.docs}
          />
        ))}
      </div>    </div>
  )
}

export default QuickstartPage
