import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

/*
  Component that will take a string and convert it to
  hand images.

  The string will be converted to lower case and stripped of anything
  but the characters a-z
*/

const TranslationDisplayComponent = (props) => {
  /* PROPS */
  const { translation } = props

  /* STATE */
  const [translationImages, setTranslationImages] = useState([])

  /* LIFECYCLE */
  useEffect(() => {
    const letters = Array
      .from(translation.toLowerCase())
      .filter(val => val.match(/[a-z]/))
      .map((val, index) => { return <img alt={val} src={`individual_signs/${val}.png`} key={index}/> })

    setTranslationImages(letters)
  }, [translation])

  return (<div className="translation-display">{translationImages}</div>)
}

TranslationDisplayComponent.propTypes = { translation: PropTypes.string.isRequired }

export default TranslationDisplayComponent
