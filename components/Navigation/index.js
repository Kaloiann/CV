import Link from 'next/link'
import React from 'react'
import navigation from '../../public/api/navigation.json'

import classes from './navigation.module.css'

function Navigation() {
  return (
    <div>
    <div className={classes.container}>
      <img src={navigation.image} alt="Profile Picture" />
      {navigation.pageLinks.map(link => (
        link.external ?
        <a href={link.link} target="_blank">{link.title}</a> :
        <Link href={link.link}>{link.title}</Link>
      ))}
      {/* <Link href='/'>
          {navigation.pageLink.title}
      </Link>
      <a href='https://github.com/Kaloiann?tab=repositories'>{navigation.externalLinks.title}</a>
      <a>{navigation.secondPageLink.title}</a>
      <a>{navigation.contactInfo.title}</a> */}
    {/* <button>Print</button> */}
    </div>
  </div>
  )
}

export default Navigation