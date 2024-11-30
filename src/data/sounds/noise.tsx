import { FaVolumeUp, FaWaveSquare } from 'react-icons/fa/index'; // Import icons directly

import type { Category } from '../types';

export const noise: Category = {
  icon: <FaVolumeUp />, // Icon for the category
  id: 'color-noises', // Unique ID for the category
  sounds: [
    {
      disabled: true, // Mark the sound as disabled
      icon: <FaWaveSquare />, // Icon for the sound
      id: 'white-noise',
      label: 'White Noise',
      src: '/sounds/noise/white-noise.mp3', // Path to the sound file
    },
    {
      disabled: true,
      icon: <FaWaveSquare />,
      id: 'pink-noise',
      label: 'Pink Noise',
      src: '/sounds/noise/pink-noise.mp3',
    },
    {
      disabled: true,
      icon: <FaWaveSquare />,
      id: 'brown-noise',
      label: 'Brown Noise',
      src: '/sounds/noise/brown-noise.mp3',
    },
    {
      disabled: true,
      icon: <FaWaveSquare />,
      id: 'blue-noise',
      label: 'Blue Noise',
      src: '/sounds/noise/blue-noise.mp3',
    },
    {
      disabled: true,
      icon: <FaWaveSquare />,
      id: 'violet-noise',
      label: 'Violet Noise',
      src: '/sounds/noise/violet-noise.mp3',
    },
  ],
  title: 'Color Noises', // Title of the category
};
