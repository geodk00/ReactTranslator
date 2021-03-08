import { useState } from 'react'
import { loadState } from '../utils/localstorage'
import { Link } from 'react-router-dom'

import TranslationDisplayComponent from '../components/TranslationDisplayComponent'
import ProtectedComponent from '../components/ProtectedComponent'

const ProfileView = (props) => {
  const [currentTranslation, setCurrentTranslation] = useState('')

  const translations = loadState('translations').map((val, key) => { return <li onClick={event => setCurrentTranslation(event.target.innerText) } key={key}>{val}</li> })
  return (
    <div>
      <Link to="/logout">Logout</Link>
      <ul>
        {translations}
      </ul>
      <TranslationDisplayComponent translation={currentTranslation} />
    </div>
  )
}

export default ProtectedComponent(ProfileView)
