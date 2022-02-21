import React from 'react'
import Data from '../../public/api/contact.json'
import css from './contact.module.css'

function Contact() {
  return (
    <div className={css.container}>
        <h1>{Data.title}</h1>
        <div className={css.info}>
            <div className={css.email}>
                {Data.email}
            </div>
            <div className={css.phone}>
                {Data.phone}
            </div>
        </div>
    </div>
  )
}

export default Contact