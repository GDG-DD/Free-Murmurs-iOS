import { MdSmartToy, MdWaterDrop, MdRadio } from 'react-icons/md/index';
import { FaKeyboard, FaClock, FaFan } from 'react-icons/fa/index';
import {
  GiWindchimes,
  GiFilmProjector,
  GiWashingMachine,
} from 'react-icons/gi/index';
import { TbBowlFilled } from 'react-icons/tb/index';
import { RiBubbleChartFill } from 'react-icons/ri/index';
import { BiSolidDryer } from 'react-icons/bi/index';
import { IoIosRadio } from 'react-icons/io/index';

import type { Category } from '../types';

export const things: Category = {
  icon: <MdSmartToy />,
  id: 'things',
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
      icon: <FaKeyboard />,
      id: 'typewriter',
      label: 'Typewriter',
      src: '/sounds/things/typewriter.mp3',
    },
    {
      icon: <FaClock />,
      id: 'clock',
      label: 'Clock',
      src: '/sounds/things/clock.mp3',
    },
    {
      icon: <FaFan />,
      id: 'ceiling-fan',
      label: 'Ceiling Fan',
      src: '/sounds/things/ceiling-fan.mp3',
    },
    {
      icon: <GiWindchimes />,
      id: 'wind-chimes',
      label: 'Wind Chimes',
      src: '/sounds/things/wind-chimes.mp3',
    },
    {
      icon: <TbBowlFilled />,
      id: 'singing-bowl',
      label: 'Singing Bowl',
      src: '/sounds/things/singing-bowl.mp3',
    },
    {
      icon: <BiSolidDryer />,
      id: 'dryer',
      label: 'Dryer',
      src: '/sounds/things/dryer.mp3',
    },
    {
      icon: <GiFilmProjector />,
      id: 'slide-projector',
      label: 'Slide Projector',
      src: '/sounds/things/slide-projector.mp3',
    },
    {
      icon: <MdWaterDrop />,
      id: 'boiling-water',
      label: 'Boiling Water',
      src: '/sounds/things/boiling-water.mp3',
    },
    {
      icon: <RiBubbleChartFill />,
      id: 'bubbles',
      label: 'Bubbles',
      src: '/sounds/things/bubbles.mp3',
    },
    {
      icon: <MdRadio />,
      id: 'tuning-radio',
      label: 'Tuning Radio',
      src: '/sounds/things/tuning-radio.mp3',
    },
    {
      icon: <IoIosRadio />,
      id: 'morse-code',
      label: 'Morse Code',
      src: '/sounds/things/morse-code.mp3',
    },
    {
      icon: <GiWashingMachine />,
      id: 'washing-machine',
      label: 'Washing Machine',
      src: '/sounds/things/washing-machine.mp3',
    },
  ],
  title: 'Things',
};
