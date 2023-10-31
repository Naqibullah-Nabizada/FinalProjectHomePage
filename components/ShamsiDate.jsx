"use client"

import moment from 'jalali-moment';
import { useEffect, useState } from 'react';

const ShamsiDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const shamsiDate = moment().format('jYYYY');
      setCurrentDate(shamsiDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{currentDate}</span>;
};

export default ShamsiDate;