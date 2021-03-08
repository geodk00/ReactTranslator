import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const TranslationDisplayComponent = (props) => {
  const translation = props.translation

  const [translationImages, setTranslationImages] = useState([])

  useEffect(() => {
    const letters = Array
      .from(translation.toLowerCase())
      .filter(val => val.match(/[a-z]/))
      .map((val, index) => { return <img alt={val} src={`individual_signs/${val}.png`} key={index}/> })

    setTranslationImages(letters)
  }, [translation])

  return (<div>{translationImages}</div>)
}

TranslationDisplayComponent.propTypes = { translation: PropTypes.string.isRequired }

export default TranslationDisplayComponent
