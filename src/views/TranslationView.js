import PropTypes from 'prop-types'
import ProtectedComponent from '../components/ProtectedComponent'
import TranslationDisplayComponent from '../components/TranslationDisplayComponent'
import { useState } from 'react'

import ArrowRightIcon from '../components/icons/ArrowRightIcon'

import './TranslationView.css'

/*
  Main view of the app.
  Responsible for taking input from the user and sending it
  up the tree to the state in App as well as displaying the
  current translation (received as a prop from App)

*/

const TranslationView = (props) => {
  /* PROPS */
  const { addTranslation } = props

  /* STATE */
  const [translation, setTranslation] = useState('')
  const [currentTranslation, setCurrentTranslation] = useState('')
  /* EVENT HANDLERS */
  const handleSubmit = (event) => {
    event.preventDefault()
    addTranslation(translation)
    setCurrentTranslation(translation)
    setTranslation('')
  }

  const handleChange = (event) => {
    setTranslation(event.target.value)
  }

  return (
    <main className="translation-box">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
            <input type="text" value={translation} onChange={handleChange}></input>
            <ArrowRightIcon onClick={handleSubmit}/>
            </div>
          </form>
            {currentTranslation && <TranslationDisplayComponent translation={currentTranslation} />}
        </div>
      </main>
  )
}

TranslationView.propTypes = { addTranslation: PropTypes.func.isRequired }

export default ProtectedComponent(TranslationView)
