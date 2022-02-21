import React from 'react'
import classes from './motivationalLetter.module.css'
import Data from '../../public/api/motivation.letter.json'

function MotivationalLetter() {
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

export default MotivationalLetter