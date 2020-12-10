import React from 'react';
import { Props } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { colors } from 'assets/styles/variables';

const Rating: React.FC<Props> = ({ value, text, color }) => {
  const starClassPicker = (currentStar: number): [IconPrefix, IconName] => {
    if (currentStar <= value) {
      return ['fas', 'star'];
    }

    return !Number.isInteger(value) && currentStar - value === 0.5
      ? ['fas', 'star-half-alt']
      : ['far', 'star'];
  };

  const stars = () => {
    const amount = 5;
    const set = [];
    for (let i = 1; i <= amount; i++) {
      set.push(
        <FontAwesomeIcon
          key={i}
          color={colors.amber}
          icon={starClassPicker(i)}
        />
      );
    }

    return set;
  };

  return (
    <div className="rating">
      <span>{stars()}</span> <span>{text}</span>
    </div>
  );
};

export default Rating;
