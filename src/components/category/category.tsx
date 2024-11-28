import { Sounds } from '@/components/sounds';
import { PremiumContainer } from '@/components/PremiumContainer/PremiumContainer';

import styles from './category.module.css';

import type { Category } from '@/data/types';

interface CategoryProps extends Category {
  functional?: boolean;
}

export function Category({
  functional = true,
  icon,
  id,
  premium,
  sounds,
  title, // Add the premium property
}: CategoryProps) {
  return (
    <div className={styles.category} id={`category-${id}`}>
      <div className={styles.iconContainer}>
        <div className={styles.tail} />
        <div aria-hidden="true" className={styles.icon}>
          {icon}
        </div>
      </div>

      <div className={styles.title}>{title}</div>

      {/* Check if sounds array is empty and premium exists */}
      {sounds.length > 0 ? (
        <Sounds functional={functional} id={id} sounds={sounds} />
      ) : (
        premium && (
          <PremiumContainer icon={premium.icon} message={premium.message} />
        )
      )}
    </div>
  );
}
