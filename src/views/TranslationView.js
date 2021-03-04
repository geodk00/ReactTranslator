import PropTypes from 'prop-types'
import ProtectedComponent from '../components/ProtectedComponent'
import { useState } from 'react'

const TranslationView = (props) => {
  const { addTranslation } = props

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
        </div>
  )
}

TranslationView.propTypes = { addTranslation: PropTypes.func.isRequired }
export default ProtectedComponent(TranslationView)
