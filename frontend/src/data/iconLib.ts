import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

const iconLibrary = () => library.add(faStar, farFaStar, faStarHalfAlt);

export default iconLibrary;
