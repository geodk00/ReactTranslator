import PropTypes from 'prop-types'
import ProtectedComponent from '../components/ProtectedComponent'
import TranslationDisplayComponent from '../components/TranslationDisplayComponent'
import { useState } from 'react'

const TranslationView = (props) => {
  const { addTranslation } = props
  const { currentTranslation } = props

  const [translation, setTranslation] = useState('')

  const handleSubmit = (event) => {
    addTranslation(translation)
  }

  const handleChange = (event) => {
    setTranslation(event.target.value)
  }

  return (
        <div>
            Translation View
            <input type="text" onChange={handleChange}></input>
            <button onClick={handleSubmit}>Translate</button>
            {currentTranslation && <TranslationDisplayComponent translation={currentTranslation} />}
        </div>
  )
}

TranslationView.propTypes = { addTranslation: PropTypes.func.isRequired }
TranslationView.propTypes = { currentTranslation: PropTypes.string }

export default ProtectedComponent(TranslationView)
