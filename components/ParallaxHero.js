import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMosque } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/ParallaxHero.module.css';

export default function ParallaxHero({ darkMode }) {
    const [scrollY, setScrollY] = useState(0);

    // Handle scroll event for parallax effects
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.hero} ${darkMode ? styles.darkHero : ''}`}>
            <div
                className={styles.headerPattern}
                style={{
                    transform: `translateY(${scrollY * 0.2}px)`,
                }}
            ></div>

            <div className={styles.starsContainer}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.star}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: darkMode ? 0.8 : 0,
                        }}
                    ></div>
                ))}
            </div>

            <div className={styles.moonContainer} style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                <div className={`${styles.moon} ${darkMode ? styles.visibleMoon : ''}`}></div>
            </div>

            <div className={styles.lanternsContainer}>
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={styles.lantern}
                        style={{
                            left: `${15 + i * 18}%`,
                            animationDelay: `${i * 0.3}s`,
                            transform: `translateY(${scrollY * 0.15}px)`,
                        }}
                    ></div>
                ))}
            </div>

            <div className={styles.mosqueSilhouette} style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>

            <motion.div
                className={styles.logoContainer}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className={`${styles.logo} ${darkMode ? styles.darkLogo : ''}`}>
                    <FontAwesomeIcon icon={faMosque} />
                </div>
            </motion.div>

            <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
                Undangan Bukber Ramadhan 1446H
            </motion.h1>

            <motion.h2
                className={styles.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
                Alumni SDN Kemanggisan 17 Pagi
            </motion.h2>

            <div className={styles.mosqueOverlay}></div>
        </header>
    );
}