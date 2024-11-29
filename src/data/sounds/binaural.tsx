import { FaBrain, FaHeadphones, FaWaveSquare } from 'react-icons/fa/index';

import type { Category } from '../types';

export const binaural: Category = {
  icon: <FaBrain />,
  id: 'binaural',
  premium: {
    icon: (
      <a
        href="https://play.google.com/store/apps/details?id=your.app.id"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Get it on Google Play"
          src="/images/google-play-badge.png"
          style={{ width: '150px' }} // Adjust the size as needed
        />
      </a>
    ),
    message: 'Get the Premium Version here!',
  },
  sounds: [
    {
      disabled: true,
      icon: <FaHeadphones />,
      id: 'alpha-waves',
      label: 'Alpha Waves',
      src: '/sounds/binaural/alpha-waves.mp3',
    },
    {
      disabled: true,
      icon: <FaWaveSquare />,
      id: 'beta-waves',
      label: 'Beta Waves',
      src: '/sounds/binaural/beta-waves.mp3',
    },
    {
      disabled: true,
      icon: <FaWaveSquare />,
      id: 'delta-waves',
      label: 'Delta Waves',
      src: '/sounds/binaural/delta-waves.mp3',
    },
    {
      disabled: true,
      icon: <FaWaveSquare />,
      id: 'theta-waves',
      label: 'Theta Waves',
      src: '/sounds/binaural/theta-waves.mp3',
    },
    {
      disabled: true,
      icon: <FaWaveSquare />,
      id: 'gamma-waves',
      label: 'Gamma Waves',
      src: '/sounds/binaural/gamma-waves.mp3',
    },
  ],
  title: 'Binaural Beats',
};
