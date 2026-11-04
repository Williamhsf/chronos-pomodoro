import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    // console.log('clicado', Date.now());
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    console.log('Theme mudou', theme, Date.now());

    return () => {
      console.log('Olha, este componente sera atualizado');
    };
  }, [theme]); // executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='ir para a home'
        title='ir para a home'
      >
        <HouseIcon size={64} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='ver histórico'
        title='ver histórico'
      >
        <HistoryIcon size={64} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='configurações'
        title='configurações'
      >
        <SettingsIcon size={64} />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='mudar tema'
        title='mudar tema'
        onClick={handleThemeChange}
      >
        <SunIcon size={64} />
      </a>
    </nav>
  );
}
