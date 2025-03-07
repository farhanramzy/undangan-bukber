import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMosque } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import styles from '@/styles/Header.module.css';

export default function Header() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.headerPattern}></div>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faMosque} />
            </div>
            <h1 className={`${styles.slideUp} ${isLoaded ? styles.visible : ''}`}>
                Undangan Bukber Ramadhan 1446H
            </h1>
            <h2 className={`${styles.slideUp} ${isLoaded ? styles.visible : ''}`} style={{ animationDelay: '100ms' }}>
                Alumni SDN Kemanggisan 17 Pagi
            </h2>
        </header>
    );
}
