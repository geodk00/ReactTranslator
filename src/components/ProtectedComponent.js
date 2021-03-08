import { Redirect } from 'react-router-dom'
import { loadState } from '../utils/localstorage'

/*
  HOC to guard components that require the user to be logged
  in.
*/

const ProtectedComponent = Component => props => {
  /* PROPS */
  const { user } = props

  // let the user through if there's a user saved in localStorage and let
  // a different component load and set the state properly
  if (user || loadState('user')) {
    return <Component {...props} />
  } else {
    return <Redirect to="/login" />
  }
}

export default ProtectedComponent
