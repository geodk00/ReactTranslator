import { Redirect } from 'react-router-dom'

const ProtectedComponent = Component => props => {
  const user = props.user
  console.log('protected username: ' + user)
  if (user) {
    return <Component {...props} />
  } else {
    return <Redirect to="/login" />
  }
}

export default ProtectedComponent
