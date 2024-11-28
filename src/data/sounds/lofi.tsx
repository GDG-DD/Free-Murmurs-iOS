import { GiNightSky } from 'react-icons/gi/index';
import { GiModernCity } from 'react-icons/gi';
import { BsCassetteFill } from 'react-icons/bs/index';

import type { Category } from '../types';

export const lofi: Category = {
  icon: <BsCassetteFill />,
  id: 'lofi',
  sounds: [
    {
      icon: <GiNightSky />,
      id: 'cozy-night',
      label: 'Cozy Night',
      src: '/sounds/lofi/cozy-night.mp3',
    },
    {
      icon: <GiModernCity />,
      id: 'retro-city',
      label: 'Retro City',
      src: '/sounds/lofi/retro-city.mp3',
    },
  ],
  title: 'Lofi',
};
