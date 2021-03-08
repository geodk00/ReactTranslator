import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { removeState } from '../utils/localstorage'

import ProtectedComponent from '../components/ProtectedComponent'

const LogoutView = (props) => {
  const { changeUser } = props
  const { resetTranslations } = props

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

LogoutView.propTypes = { changeUser: PropTypes.func.isRequired }
LogoutView.propTypes = { resetTranslations: PropTypes.func.isRequired }
export default ProtectedComponent(LogoutView)
