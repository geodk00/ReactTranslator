import PropTypes from 'prop-types'
import { removeState } from '../utils/localstorage'

import ProtectedComponent from '../components/ProtectedComponent'

const LogoutView = (props) => {
  const changeUser = props.changeUser

  removeState()
  changeUser('')

  return (
    <div>
      <p>You have been logged out</p>

    </div>
  )
}

LogoutView.propTypes = { changeUser: PropTypes.func.isRequired }
export default ProtectedComponent(LogoutView)
