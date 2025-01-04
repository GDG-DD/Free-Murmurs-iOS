import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Sound } from '@/components/sound';
import { cn } from '@/helpers/styles';
import { fade, scale, mix } from '@/lib/motion';

import styles from './sounds.module.css';

import type { Sounds } from '@/data/types';

interface SoundsProps {
  functional: boolean;
  id: string;
  premium?: {
    icon: React.ReactNode;
    message: string;
  };
  sounds: Sounds;
}

export function Sounds({ functional, id, premium, sounds }: SoundsProps) {
  const [showAll, setShowAll] = useState(false);
  const [clickedMore, setClickedMore] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);

  const firstNewSound = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showAll && clickedMore) {
      firstNewSound.current?.focus();
      setClickedMore(false);
    }
  }, [showAll, clickedMore]);

  const toggleMore = () => {
    if (!isAnimating) {
      setShowAll(prev => !prev);
      setClickedMore(true);
    }
  };

  const variants = mix(fade(), scale(0.9));

  // Custom behavior for Binaural and Color Noises categories
  if (id === 'binaural' || id === 'color-noises') {
    return (
      <div>
        {/* Premium Message */}
        <p
          style={{ color: '#FA4600', fontWeight: 'bold', textAlign: 'center' }}
        >
          <a
            href="https://apps.apple.com/sg/app/murmurs-focus-better/id6739237629"
            rel="noopener noreferrer"
            style={{ color: '#FA4600', textDecoration: 'none' }}
            target="_blank"
          >
            Premium-Exclusive Category
          </a>
        </p>

        <div className={styles.sounds}>
          {sounds.map(sound => (
            <Sound
              key={sound.label}
              {...sound}
              disabled={true} // Greyed out and unclickable
              functional={functional}
              hidden={false} // Always show all sounds
              ref={undefined}
              selectHidden={() => {}}
              unselectHidden={() => {}}
            />
          ))}
        </div>

        {/* Premium Message and PNG */}
        {premium && (
          <div className={styles.premiumContainer}>
            <p>{premium.message}</p>
            <div>{premium.icon}</div>
          </div>
        )}
      </div>
    );
  }

  // Custom behavior for the "Things", "Transport", "Places", "Urban", "Animals", "Rain", "Nature", and "Lofi" categories
  if (
    id === 'things' ||
    id === 'transport' ||
    id === 'places' ||
    id === 'urban' ||
    id === 'animals' ||
    id === 'rain' ||
    id === 'nature' ||
    id === 'lofi'
  ) {
    return (
      <div>
        <div className={styles.sounds}>
          {/* Top row: Clickable sounds */}
          {sounds.slice(0, 3).map(sound => (
            <Sound
              key={sound.label}
              {...sound}
              disabled={false} // Clickable
              functional={functional}
              hidden={false}
              ref={undefined}
              selectHidden={() => {}}
              unselectHidden={() => {}}
            />
          ))}
        </div>

        {/* Premium message */}
        <p className={styles.premiumMessage}>
          More sounds available in{' '}
          <a
            href="https://apps.apple.com/sg/app/murmurs-focus-better/id6739237629"
            rel="noopener noreferrer"
            style={{ color: '#FA4600', textDecoration: 'none' }}
            target="_blank"
          >
            Premium
          </a>
        </p>

        {/* Show More / Show Less button */}
        <button className={cn(styles.button)} onClick={toggleMore}>
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              animate="show"
              exit="hidden"
              initial="hidden"
              key={showAll ? `${id}-show-less` : `${id}-show-more`}
              variants={variants}
              onAnimationComplete={() => setIsAnimating(false)}
              onAnimationStart={() => setIsAnimating(true)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Remaining sounds: Greyed out */}
        {showAll && (
          <div className={styles.sounds}>
            {sounds.slice(3).map(sound => (
              <Sound
                key={sound.label}
                {...sound}
                disabled={true} // Greyed out and unclickable
                functional={functional}
                hidden={false}
                ref={undefined}
                selectHidden={() => {}}
                unselectHidden={() => {}}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default rendering for other categories
  return (
    <div>
      <div className={styles.sounds}>
        {sounds.map((sound, index) => (
          <Sound
            key={sound.label}
            {...sound}
            disabled={sound.disabled} // Pass the disabled property
            functional={functional}
            hidden={!showAll && index > 5} // Show only the first 6 sounds unless "Show More" is clicked
            ref={index === 6 ? firstNewSound : undefined}
            selectHidden={() => {}}
            unselectHidden={() => {}}
          />
        ))}

        {sounds.length < 2 &&
          new Array(2 - sounds.length)
            .fill(null)
            .map((_, index) => <div key={index} />)}
      </div>

      {/* Show More / Show Less Button */}
      {sounds.length > 6 && (
        <button className={cn(styles.button)} onClick={toggleMore}>
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              animate="show"
              exit="hidden"
              initial="hidden"
              key={showAll ? `${id}-show-less` : `${id}-show-more`}
              variants={variants}
              onAnimationComplete={() => setIsAnimating(false)}
              onAnimationStart={() => setIsAnimating(true)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </motion.span>
          </AnimatePresence>
        </button>
      )}
    </div>
  );
}
