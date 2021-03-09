import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import TranslationDisplayComponent from '../components/TranslationDisplayComponent'
import ProtectedComponent from '../components/ProtectedComponent'

import './ProfileView.css'
/*
  View Responsible for displaying the translation history
  and letting the user log out.

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
    <main className="profile-box">
      <div>
      <Link to="/">Translate</Link><Link to="/logout">Logout</Link>
        <div className="history-container">
        <ul>
          {translationsList}
        </ul>
        <TranslationDisplayComponent translation={currentTranslation} />
        </div>
      </div>
    </main>
  )
}

ProfileView.propTypes = { translations: PropTypes.arrayOf(PropTypes.string) }

export default ProtectedComponent(ProfileView)
