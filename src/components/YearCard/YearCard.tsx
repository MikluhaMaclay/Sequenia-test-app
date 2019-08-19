import React from 'react';
import styles from './YearCard.module.scss';

type YearCardProps = {
  year: string | number
}

const YearCard = ({ year }: YearCardProps) => (
    <div className={styles.main}>
      <span>{year}</span>
    </div>
  );

export default YearCard

