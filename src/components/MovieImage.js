import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const MovieImage = ({ src, fallbackSrc, ...props }) => {
  const [ srcState, setSrc ] = useState('');
  const [ errored, setErrored ] = useState(false);

  useEffect(() => {
    setSrc(src);
  }, [src]);

  // * Set src to fallback if load failed
  const onError = () => {
    if (!errored) {
      setSrc(fallbackSrc)
      setErrored(true);
    }
  }

  return (
    <img
      src={srcState || fallbackSrc}
      onError={onError}
      {...props}
      alt="Poster"
    />
  )
}

MovieImage.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string
}

export default MovieImage

