import { useState, useMemo, useCallback } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5/index';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion } from 'framer-motion';

import {
  ShuffleItem,
  NotepadItem,
  PomodoroItem,
  BreathingExerciseItem,
  PresetsItem,
  SleepTimerItem,
} from './items';
import { Divider } from './divider';
import { PresetsModal } from '@/components/modals/presets';
import { SleepTimerModal } from '@/components/modals/sleep-timer';
import { Notepad, Pomodoro, BreathingExercise } from '@/components/toolbox';
import { fade, mix, slideY } from '@/lib/motion';
import { useSoundStore } from '@/stores/sound';

import styles from './menu.module.css';
import { useCloseListener } from '@/hooks/use-close-listener';
import { closeModals } from '@/lib/modal';

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const noSelected = useSoundStore(state => state.noSelected());

  const initial = useMemo(
    () => ({
      breathingExercise: false,
      notepad: false,
      pomodoro: false,
      presets: false,
      sleepTimer: false,
    }),
    [],
  );

  const [modals, setModals] = useState(initial);

  const close = useCallback((name: string) => {
    setModals(prev => ({ ...prev, [name]: false }));
  }, []);

  const closeAll = useCallback(() => setModals(initial), [initial]);

  const open = useCallback(
    (name: string) => {
      closeAll();
      setIsOpen(false);
      closeModals();
      setModals(prev => ({ ...prev, [name]: true }));
    },
    [closeAll],
  );

  useCloseListener(closeAll);

  const variants = mix(fade(), slideY());

  return (
    <>
      <div className={styles.wrapper}>
        <DropdownMenu.Root open={isOpen} onOpenChange={o => setIsOpen(o)}>
          <DropdownMenu.Trigger asChild>
            <button aria-label="Menu" className={styles.menuButton}>
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
          </DropdownMenu.Trigger>

          <AnimatePresence>
            {isOpen && (
              <DropdownMenu.Portal forceMount>
                <DropdownMenu.Content
                  align="end"
                  asChild
                  collisionPadding={10}
                  side="top"
                  sideOffset={12}
                >
                  <motion.div
                    animate="show"
                    className={styles.menu}
                    exit="hidden"
                    initial="hidden"
                    variants={variants}
                  >
                    {/* Basic Features Section */}
                    <div className={styles.basicSection}>
                      <p className={styles.basicTitle}>Basic Features</p>

                      <PresetsItem open={() => open('presets')} />
                      <ShuffleItem />
                      <SleepTimerItem open={() => open('sleepTimer')} />
                    </div>

                    <Divider />

                    {/* Premium Features Section */}
                    <div className={styles.premiumSection}>
                      <p className={styles.premiumTitle}>Premium Features</p>

                      {/* Greyed-out and disabled items */}
                      <div className={styles.disabledItem}>
                        <BreathingExerciseItem open={() => {}} />
                      </div>
                      <div className={styles.disabledItem}>
                        <PomodoroItem open={() => {}} />
                      </div>
                      <div className={styles.disabledItem}>
                        <NotepadItem open={() => {}} />
                      </div>
                    </div>
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            )}
          </AnimatePresence>
        </DropdownMenu.Root>
      </div>

      <PresetsModal show={modals.presets} onClose={() => close('presets')} />
      <Notepad show={modals.notepad} onClose={() => close('notepad')} />
      <Pomodoro
        open={() => open('pomodoro')}
        show={modals.pomodoro}
        onClose={() => close('pomodoro')}
      />
      <BreathingExercise
        show={modals.breathingExercise}
        onClose={() => close('breathingExercise')}
      />
      <SleepTimerModal
        show={modals.sleepTimer}
        onClose={() => close('sleepTimer')}
      />
    </>
  );
}
