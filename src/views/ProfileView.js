import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import TranslationDisplayComponent from '../components/TranslationDisplayComponent'
import ProtectedComponent from '../components/ProtectedComponent'

/*
  View Responsible for displaying the translation history
  and let the user log out.

  Logging out is handled by LogoutView
*/

const ProfileView = (props) => {
  /* PROPS */
  const { translations } = props

  /* STATE */
  const [currentTranslation, setCurrentTranslation] = useState('')

  // Translations will not change while we're in this view
  const translationsList = translations.map((val, key) => { return <li onClick={event => setCurrentTranslation(event.target.innerText) } key={key}>{val}</li> })

  return (
    <div>
      <Link to="/logout">Logout</Link>
      <ul>
        {translationsList}
      </ul>
      <TranslationDisplayComponent translation={currentTranslation} />
    </div>
  )
}

ProfileView.propTypes = { translations: PropTypes.arrayOf(PropTypes.string) }

export default ProtectedComponent(ProfileView)
