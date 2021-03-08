import PropTypes from 'prop-types'
import ProtectedComponent from '../components/ProtectedComponent'
import TranslationDisplayComponent from '../components/TranslationDisplayComponent'
import { useState } from 'react'

/*
  Main view of the app.
  Responsible for taking input from the user and sending it
  up the tree to the state in App as well as displaying the
  current translation (received as a prop from App)

*/

const TranslationView = (props) => {
  /* PROPS */
  const { addTranslation } = props
  const { currentTranslation } = props

  /* STATE */
  const [translation, setTranslation] = useState('')

  /* EVENT HANDLERS */
  const handleSubmit = (event) => {
    addTranslation(translation)
  }

  const handleChange = (event) => {
    setTranslation(event.target.value)
  }

  return (
        <div>
            <input type="text" onChange={handleChange}></input>
            <button onClick={handleSubmit}>Translate</button>
            {currentTranslation && <TranslationDisplayComponent translation={currentTranslation} />}
        </div>
  )
}

TranslationView.propTypes = { addTranslation: PropTypes.func.isRequired }
TranslationView.propTypes = { currentTranslation: PropTypes.string }

export default ProtectedComponent(TranslationView)
