import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const HeaderComponent = (props) => {
  /* PROPS */
  const { user } = props

  return (
    <header>
          {user && <div className="img-overlay-wrap">
            <img src="Logo.png" alt="Logo" className="header-logo" />
            <img src="Splash.svg" alt="" className="underlay" />
          </div>}
          <h1>Lost in Translation</h1>
          {user && <div><p>logged in as <Link to="/profile">{user}</Link></p></div>}
      </header>
  )
}

HeaderComponent.propTypes = { user: PropTypes.string }
export default HeaderComponent
