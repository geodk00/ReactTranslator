import { useEffect, useState } from 'react'
import { /* loadState, */ loadState, saveState } from './utils/localstorage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import LoginView from './views/LoginView'
import TranslationView from './views/TranslationView'
import LogoutView from './views/LogoutView'
import ProfileView from './views/ProfileView'

// import logo from './logo.svg';
import './App.css'

function App () {
  /* CONSTANTS */
  const TRANSLATIONS_TO_KEEP = 10

  /* STATE */
  const [user, setUser] = useState('')
  const [translations, setTranslations] = useState([])

  /* LIFECYCLE */
  useEffect(() => {
    if (!user) {
      console.log('No user')
      const loadUser = loadState('user')
      const loadTranslations = loadState('translations')
      if (loadUser) {
        setUser(loadUser)
        setTranslations(loadTranslations || [])
      }
    }
  }, [user, translations])

  /* EVENT HANDLERS */
  const handleUserChange = (name) => {
    console.log('set user to: ' + name)
    setUser(name)
  }

  const handleNewTranslation = (inputString) => {
    // Add the new translation string to the front and remove the last element
    // without modifying the current state of the array in place
    const newTranslations = [inputString, ...translations.slice(0, TRANSLATIONS_TO_KEEP - 1)]
    setTranslations(newTranslations)
    saveState('translations', newTranslations)
  }

  const resetTransLations = () => {
    setTranslations([])
  }
  return (
    <Router>
      <div className="App">
        <header>
          {user && <div className="img-overlay-wrap">
            <img src="Logo.png" alt="Logo" className="header-logo" />
            <img src="Splash.svg" alt="" className="underlay" />
          </div>}
          <h1>Lost in Translation</h1>
          {user && <div><p>logged in as <Link to="/profile">{user}</Link></p></div>}
        </header>

        <Switch>
          <Route path="/login" >
            <LoginView onLogin={handleUserChange} />
          </Route>
          <Route path="/logout">
            <LogoutView user={user} changeUser={handleUserChange} resetTranslations={resetTransLations}/>
          </Route>
          <Route path="/profile">
            <ProfileView user={user} />
          </Route>
          <Route path="/">
            <TranslationView user={user} addTranslation={handleNewTranslation} currentTranslation={translations[0] || ''}/>
          </Route>
        </Switch>

        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </Router>
  )
}

export default App
