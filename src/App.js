import { useEffect, useState } from 'react'
import { loadState, saveState } from './utils/localstorage'

import LoginView from './views/LoginView'
import TranslationView from './views/TranslationView'
import LogoutView from './views/LogoutView'

// import logo from './logo.svg';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  /* STATE */
  const [user, setUser] = useState('')

  /* LIFECYCLE */
  useEffect(() => {
    return () => {
      console.log('saving user: ' + user)
      if (user) {
        saveState({ user })
      }
    }
  })
  /* EVENT HANDLERS */
  const handleUserChange = (name) => {
    setUser(name)
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
          {user && <p>logged in as {user}</p>}
        </header>

        <Switch>
          <Route path="/login" >
            <LoginView onLogin={handleUserChange} />
          </Route>
          <Route path="/logout">
            <LogoutView user={user} changeUser={handleUserChange} />
          </Route>
          <Route path="/">
            <TranslationView user={user} />
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
