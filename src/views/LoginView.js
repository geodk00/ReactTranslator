import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { saveState } from '../utils/localstorage'
import { useState } from 'react'

import ArrowRightIcon from '../components/icons/ArrowRightIcon'

import './LoginView.css'
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

  /* Save to localStorage before sending to '/' */
  const handleSubmit = (event) => {
    saveState('user', username)
    saveState('translations', [])
    props.onLogin(username)
    history.push('/')
  }

  return (
    <main className="login-box">
      <div>
        <p>Login:</p>
        <form>
          <div>
            <input type="text"
                    onChange={handleChange}
                    name="name">
            </input>
            <ArrowRightIcon onClick={handleSubmit}/>
        </div>
        </form>
      </div>
    </main>
  )
}

LoginView.propTypes = { onLogin: PropTypes.func.isRequired }
export default LoginView
