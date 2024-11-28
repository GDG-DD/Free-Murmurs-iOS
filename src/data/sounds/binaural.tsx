import { TbWaveSine } from 'react-icons/tb/index';

import type { Category } from '../types';

export const binaural: Category = {
  icon: <TbWaveSine />,
  id: 'binaural',
  premium: {
    icon: (
      <a
        href="https://play.google.com/store/apps/details?id=app.murmurs.android"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Get it on Google Play"
          src="/images/google-play-badge.png"
          style={{ width: '250px' }} // Adjust the size as needed
        />
      </a>
    ),
    message: 'Get the Premium Version here!',
  },
  sounds: [],
  // Remove the sound choices
  title: 'Binaural Beats',
};
