import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink}>
        <HouseIcon size={64} />
      </a>
      <a href='#' className={styles.menuLink}>
        <HistoryIcon size={64} />
      </a>
      <a href='#' className={styles.menuLink}>
        <SettingsIcon size={64} />
      </a>
      <a href='#' className={styles.menuLink}>
        <SunIcon size={64} />
      </a>
    </nav>
  );
}
