import React from 'react';
import { Props } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

const Rating: React.FC<Props> = ({ value, text, color }) => {
  const starClassPicker = (currentStar: number): [IconPrefix, IconName] => {
    if (currentStar < value) {
      return ['fas', 'star'];
    }

    return !Number.isInteger(value) && value - currentStar !== 0
      ? ['fas', 'star-half-alt']
      : ['far', 'star'];
  };

  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon icon={starClassPicker(1)} />
        <FontAwesomeIcon icon={starClassPicker(2)} />
        <FontAwesomeIcon icon={starClassPicker(3)} />
        <FontAwesomeIcon icon={starClassPicker(4)} />
        <FontAwesomeIcon icon={starClassPicker(5)} />
      </span>{' '}
      <span>{text}</span>
    </div>
  );
};

export default Rating;
