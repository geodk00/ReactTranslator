// import PropTypes from 'prop-types'
import ProtectedComponent from '../components/ProtectedComponent'

const TranslationView = (props) => {
  // const { user } = props
  return (
        <div>
            Translation View
        </div>
  )
}

// TranslationView.propTypes = { user: PropTypes.string.isRequired }
export default ProtectedComponent(TranslationView)
