import ProtectedComponent from '../components/ProtectedComponent'
import PropTypes from 'prop-types'

const LogoutView = (props) => {
  const changeUser = props.changeUser

  changeUser('')

  return (
    <div>
      <p>You have been logged out</p>

    </div>
  )
}

LogoutView.propTypes = { changeUser: PropTypes.func.isRequired }
export default ProtectedComponent(LogoutView)
