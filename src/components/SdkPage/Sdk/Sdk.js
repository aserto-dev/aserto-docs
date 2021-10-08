import React from 'react'
import Link from '@docusaurus/Link'
import '../../../css/custom.css';

const Sdk = ({ title, icon, github, docs }) => {
  return (
    <div className="sdk-card">
      <img className="sdk-image" src={`/${icon}`} alt={title} />
      <p className="sdk-name">{title}</p>
      <Link className="sdk-github-link" href={github} target='_github'>
        GitHub
      </Link>
      <Link href={docs} target='_docs'>
        <button className='launch-button'>Launch Quickstart</button>
      </Link>
    </div>    
  )
}

export default Sdk