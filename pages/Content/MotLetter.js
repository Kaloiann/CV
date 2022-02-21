import React from 'react'
import classes from './MotLetter.module.css'
import Data from '../api/motivation.letter.json'

function MotivationLetter() {
  return (
    <div className={classes.container}>
        <header>
            <h1>
                {Data.title}
            </h1>
        </header>
            <div>
                <p>{Data.description}</p>
            </div>
    </div>
  )
}

export default MotivationLetter