import React from 'react'
import Data from '../api/contact.json'
import classes from './Contact.module.css'

function Contact() {
  return (
    <div className={classes.container}>
        <h1>{Data.title}</h1>
        <div className={classes.info}>
            <div className={classes.email}>
                {Data.email}
            </div>
            <div className={classes.phone}>
                {Data.phone}
            </div>
        </div>
    </div>
  )
}

export default Contact