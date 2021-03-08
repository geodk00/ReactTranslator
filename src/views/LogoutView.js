import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { removeState } from '../utils/localstorage'

import ProtectedComponent from '../components/ProtectedComponent'

/*
  View responsible for logging the user out.
  Will delete saved state from localStorage and
  reset the core application state.

  Resetting the user will make the app redirect the
  user to the login page automatically
*/

const LogoutView = (props) => {
  /* PROPS */
  const { changeUser } = props
  const { resetTranslations } = props

  /* LIFECYCLE */
  useEffect(() => {
    removeState('user')
    removeState('translations')
    changeUser(null)
    resetTranslations()
  }, [])

  return (
    <div>
      <p>You have been logged out</p>
    </div>
  )
}

LogoutView.propTypes = {
  changeUser: PropTypes.func.isRequired,
  resetTranslations: PropTypes.func.isRequired
}

export default ProtectedComponent(LogoutView)
