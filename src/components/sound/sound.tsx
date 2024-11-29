import { useCallback, useEffect, forwardRef } from 'react';
import { ImSpinner9 } from 'react-icons/im/index';

import { Range } from './range';
import { Favorite } from './favorite';

import { useSound } from '@/hooks/use-sound';
import { useSoundStore } from '@/stores/sound';
import { useLoadingStore } from '@/stores/loading';
import { cn } from '@/helpers/styles';

import styles from './sound.module.css';

import type { Sound as SoundType } from '@/data/types';

import { useKeyboardButton } from '@/hooks/use-keyboard-button';

interface SoundProps extends SoundType {
  disabled?: boolean;
  functional: boolean;
  hidden: boolean;
  selectHidden: (key: string) => void;
  unselectHidden: (key: string) => void; // Add disabled property
}

export const Sound = forwardRef<HTMLDivElement, SoundProps>(function Sound(
  {
    disabled,
    functional,
    hidden,
    icon,
    id,
    label,
    selectHidden,
    src,
    unselectHidden,
  },
  ref,
) {
  const isPlaying = useSoundStore(state => state.isPlaying);
  const play = useSoundStore(state => state.play);
  const selectSound = useSoundStore(state => state.select);
  const unselectSound = useSoundStore(state => state.unselect);
  const setVolume = useSoundStore(state => state.setVolume);
  const volume = useSoundStore(state => state.sounds[id]?.volume);
  const isSelected = useSoundStore(state => state.sounds[id]?.isSelected);
  const locked = useSoundStore(state => state.locked);

  const isLoading = useLoadingStore(state => state.loaders[src]);

  const sound = useSound(src, { loop: true, volume });

  useEffect(() => {
    if (locked || disabled) return;

    if (isSelected && isPlaying && functional) {
      sound?.play();
    } else {
      sound?.pause();
    }
  }, [isSelected, sound, isPlaying, functional, locked, disabled]);

  useEffect(() => {
    if (hidden && isSelected) selectHidden(label);
    else if (hidden && !isSelected) unselectHidden(label);
  }, [label, isSelected, hidden, selectHidden, unselectHidden]);

  const select = useCallback(() => {
    if (locked || disabled) return;
    selectSound(id);
    play();
  }, [selectSound, play, id, locked, disabled]);

  const unselect = useCallback(() => {
    if (locked || disabled) return;
    unselectSound(id);
    setVolume(id, 0.5);
  }, [unselectSound, setVolume, id, locked, disabled]);

  const toggle = useCallback(() => {
    if (locked || disabled) return;
    if (isSelected) unselect();
    else select();
  }, [isSelected, select, unselect, locked, disabled]);

  const handleClick = useCallback(() => {
    toggle();
  }, [toggle]);

  const handleKeyDown = useKeyboardButton(() => {
    toggle();
  });

  return (
    <div
      aria-label={`${label} sound`}
      ref={ref}
      role="button"
      tabIndex={disabled ? -1 : 0} // Disable keyboard focus if disabled
      className={cn(
        styles.sound,
        isSelected && styles.selected,
        hidden && styles.hidden,
        disabled && styles.disabled, // Add disabled class
      )}
      onClick={disabled ? undefined : handleClick} // Disable click if disabled
      onKeyDown={disabled ? undefined : handleKeyDown} // Disable keyboard interaction if disabled
    >
      <Favorite id={id} label={label} />
      <div className={styles.icon}>
        {isLoading ? (
          <span aria-hidden="true" className={styles.spinner}>
            <ImSpinner9 />
          </span>
        ) : (
          <span aria-hidden="true">{icon}</span>
        )}
      </div>
      <div className={styles.label} id={id}>
        {label}
      </div>
      <Range id={id} label={label} />
    </div>
  );
});
