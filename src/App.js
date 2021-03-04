import { useEffect, useState } from 'react'
import { loadState, saveState } from './utils/localstorage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import LoginView from './views/LoginView'
import TranslationView from './views/TranslationView'
import LogoutView from './views/LogoutView'

// import logo from './logo.svg';
import './App.css'

function App () {
  /* CONSTANTS */
  const TRANSLATIONS_TO_KEEP = 10

  /* STATE */
  const [user, setUser] = useState('')
  const [translations, setTranslation] = useState([])

  /* LIFECYCLE */
  useEffect(() => {
    return () => {
      console.log('saving user: ' + user)
      if (user) {
        saveState({ user, translations })
      }
    }
  })

  /* EVENT HANDLERS */
  const handleUserChange = (name) => {
    setUser(name)
  }

  const handleNewTranslation = (inputString) => {
    // Add the new translation string to the front and remove the last element
    // without modifying the current state of the array in place
    setTranslation([inputString, ...translations.slice(0, TRANSLATIONS_TO_KEEP - 1)])
    saveState({ user, translations })
  }

  /* KINDA SORTA "PRE RENDER" */
  if (!user) {
    const savedState = loadState()
    console.log('Loading user: ')
    console.log(savedState)
    if (savedState) {
      setUser(savedState.user)
    }
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
          {user && <div><p>logged in as {user}</p><Link to="/logout">Logout</Link></div>}
        </header>

        <Switch>
          <Route path="/login" >
            <LoginView onLogin={handleUserChange} />
          </Route>
          <Route path="/logout">
            <LogoutView user={user} changeUser={handleUserChange} />
          </Route>
          <Route path="/">
            <TranslationView user={user} addTranslation={handleNewTranslation}/>
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
