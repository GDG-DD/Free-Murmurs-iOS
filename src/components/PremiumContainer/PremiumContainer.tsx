import React from 'react';
import styles from './PremiumContainer.module.css';

interface PremiumContainerProps {
  icon: React.ReactNode;
  message: string;
}

export function PremiumContainer({ icon, message }: PremiumContainerProps) {
  return (
    <div className={styles.premium}>
      <p>{message}</p>
      <div className={styles.premiumIcon}>{icon}</div>
    </div>
  );
}
