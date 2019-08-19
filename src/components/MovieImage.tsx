import React, { useState, useEffect } from 'react'

type MovieImageProps = {
  src?: string,
  fallbackSrc: string,
  alt?: string
}

const MovieImage = ({ src, fallbackSrc, alt }: MovieImageProps) => {
  const [ srcState, setSrc ] = useState('');
  const [ errored, setErrored ] = useState(false);

  useEffect(() => {
    setSrc(src as string);
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
      alt={alt}
    />
  )
}

export default MovieImage

