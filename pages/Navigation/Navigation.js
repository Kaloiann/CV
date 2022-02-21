import Link from 'next/link'
import React from 'react'
import Data from '../api/navigation.json'
import CoverLetter from '../Content/CoverLetter'


import classes from './Navigation.module.css'

function Navigation() {
  return (
      <div>
        <div className={classes.container}>
            {Data.image} 
                <Link href='/'>
                    {Data.pageLink.title}
                </Link>
            <a href='https://github.com/Kaloiann?tab=repositories'>
                {Data.externalLinks.title}
            </a>
            <a>
                {Data.secondPageLink.title}
            </a>
            <a>
                {Data.contactInfo.title}
            </a>
        <button>Print</button>
        </div>
    </div>
  )
}

export default Navigation