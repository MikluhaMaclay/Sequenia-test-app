import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieHeader.module.scss';
import { truncate } from 'lodash'

const MovieHeader = ({ closeModal, title }) => {
  const truncatedTitle = truncate(title, {
    'length': 40,
    'separator': ' '
  })

  return (
    <div className={styles.header}>
      <button className={styles.button} onClick={closeModal}>{"<"}</button>
      <span className={styles.title}>{truncatedTitle}</span>
      <span />
    </div>
  )
}

MovieHeader.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string
}

export default MovieHeader;