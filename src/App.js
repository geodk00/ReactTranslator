import { useEffect, useState } from 'react'
import { loadState, saveState } from './utils/localstorage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginView from './views/LoginView'
import TranslationView from './views/TranslationView'
import LogoutView from './views/LogoutView'
import ProfileView from './views/ProfileView'

import HeaderComponent from './components/HeaderComponent'

import './App.css'

/*
  Main Component. Contains routes and core application state.

  STATE: user
  'user' is the "logged" in user and is passed down as a prop to routes
  that require a logged in user.
  if 'user' is not set, the component will try to load it from localStorage.
  'user' is set from LoginView via the handler method handleUserChange and reset
  in LogoutView via the same method.
  'user' is saved to localStorage on login (in LoginView)

  STATE: translations
  an array of translations. translations[0] is the current translations and
  translations will only grow to a length of TRANSLATIONS_TO_KEEP.
  Translations are added in TranslationView via the handler method handleNewTranslation and
  reset in LogoutView via resetTranslations.
  'translations' is initially saved to localStorage on login (in LoginView) and
  then every time handleNewTranslations is called.
*/

function App () {
  /* CONSTANTS */
  const TRANSLATIONS_TO_KEEP = 10

  /* STATE */
  const [user, setUser] = useState('')
  const [translations, setTranslations] = useState([])

  /* LIFECYCLE */
  useEffect(() => {
    /* Try to load user from localStorage if user is not set */
    if (!user) {
      const loadUser = loadState('user')
      if (loadUser) {
        setUser(loadUser)
        /* translations are set on login and "always" available if there is a saved user (unless the user manually deletes them...) */
        setTranslations(loadState('translations'))
      }
    }
  })

  /* EVENT HANDLERS */

  /* Used in LoginView and LogoutView */
  const handleUserChange = (name) => {
    setUser(name)
  }

  /* Used in TranslationView */
  const handleNewTranslation = (inputString) => {
    // Add the new translation string to the front and remove the last element
    // without modifying the current state of the array in place
    const newTranslations = [inputString, ...translations.slice(0, TRANSLATIONS_TO_KEEP - 1)]
    setTranslations(newTranslations)
    saveState('translations', newTranslations)
  }

  /* Used in LogoutView */
  const resetTranslations = () => {
    setTranslations([])
  }
  return (
    <Router>
      <div className="App">
        <HeaderComponent user={user}/>

        <Switch>
          <Route path="/login" >
            <LoginView onLogin={handleUserChange} />
          </Route>
          <Route path="/logout">
            <LogoutView user={user} changeUser={handleUserChange} resetTranslations={resetTranslations}/>
          </Route>
          <Route path="/profile">
            <ProfileView user={user} translations={translations}/>
          </Route>
          <Route path="/">
            <TranslationView user={user} addTranslation={handleNewTranslation} currentTranslation={translations[0] || ''}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
