import { Redirect } from 'react-router-dom'
import { loadState } from '../utils/localstorage'

const ProtectedComponent = Component => props => {
  const user = props.user
  console.log('protected username: ' + user)

  const llUser = user || loadState('user')

  if (llUser) {
    return <Component {...props} />
  } else {
    return <Redirect to="/login" />
  }
}

export default ProtectedComponent
