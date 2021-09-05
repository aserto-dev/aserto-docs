import React from 'react'
import Link from '@docusaurus/Link'

const Sdk = ({ title, icon, github, docs, sample}) => {
  return (
    <div style={{ display: 'flex'}}>
      <img src={`/${icon}`} width='50' alt={title} />
      <h3 style={{
        minWidth: 200,
        marginLeft: 30,
        alignSelf: 'center'
      }}>
        {title}
      </h3>
      <Link href={github} target='_github' style={{
        alignSelf: 'center',
      }}>
        <i className='fab fa-github' />
        &nbsp;&nbsp;GitHub
      </Link>
      <div style={{ width: 30 }} />
      <Link href={docs} style={{
        alignSelf: 'center',
      }}>
        <span>
          <i className='fas fa-book' />
          &nbsp;&nbsp;Docs
        </span>
      </Link>
      <div style={{ width: 30 }} />
      <Link href={sample} style={{
        alignSelf: 'center'
      }}>
        <i className='fas fa-file-code' />
        &nbsp;&nbsp;Sample
      </Link>
    </div>    
  )
}

export default Sdk