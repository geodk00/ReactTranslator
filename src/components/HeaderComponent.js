import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

import FaceIcon from './icons/FaceIcon'

import './HeaderComponent.css'

const HeaderComponent = (props) => {
  /* PROPS */
  const { user } = props

  return (
    <header>
          <img src="Logo.png" alt="Logo" className="header-logo" />
          <h1>Lost in Translation</h1>
          {user && <div className="user-box"><Link to="/profile"><FaceIcon /><p>{user}</p></Link></div>}
      </header>
  )
}

HeaderComponent.propTypes = { user: PropTypes.string }
export default HeaderComponent
