import React from 'react'
import Data from '../../public/api/cover-letter.json'
import css from './CoverLetter.module.css'

function CoverLetter() {
  return (
    <div className={css.container}>
        <header>
            <h1>{Data.title}</h1>
        </header>
        {Data.skills.map(skill => 
            <ul>
                <li key={skill.id}>
                    <h2>{skill.title}</h2>
                    <p>{skill.paragraph}</p>
                </li>
            </ul>
            )}
    </div>
  )
}

export default CoverLetter