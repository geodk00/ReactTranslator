import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { saveState } from '../utils/localstorage'
import { useState } from 'react'

/*
  View responsible for logging in the user.
  Will move the user to / on login.
*/

const LoginView = (props) => {
  /* STATE */
  const [username, setUsername] = useState('')

  /* HOOKS */
  const history = useHistory()

  /* EVENT HANDLERS */

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  /* Save to localStorage before sending to / */
  const handleSubmit = (event) => {
    saveState('user', username)
    saveState('translations', [])
    props.onLogin(username)
    history.push('/')
  }

  return (
    <div>Login View
      <input type="text"
              onChange={handleChange}
              name="name">
      </input>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

LoginView.propTypes = { onLogin: PropTypes.func.isRequired }
export default LoginView
