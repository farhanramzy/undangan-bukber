import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarAlt,
    faClock,
    faMapMarkerAlt,
    faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';
import { faMosque } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import dynamic from 'next/dynamic';

import ParallaxHero from '@/components/ParallaxHero';
import CountdownTimer from '@/components/CountdownTimer';
import EventInfo from '@/components/EventInfo';
import FloatingElements from '@/components/FloatingElements';
import BackgroundPatterns from '@/components/BackgroundPatterns';
import Timeline from '@/components/Timeline';
import styles from '@/styles/Home.module.css';

// Dynamically import the Particles component to avoid SSR issues
const ParticlesBackground = dynamic(() => import('@/components/ParticlesBackground'), {
    ssr: false
});

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const { ref: refTitle, inView: inViewTitle } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Ref for the main container to apply parallax effect
    const containerRef = useRef(null);

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

    // Check for evening time to potentially switch to dark mode
    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 18 || currentHour < 6) {
            setDarkMode(true);
        }

        setIsLoaded(true);
    }, []);

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <>
            <Head>
                <title>Undangan Bukber Alumni SDN Kemanggisan 17 Pagi</title>
                <meta name="description" content="Undangan Buka Puasa Bersama Ramadhan 1446H" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@300;400;500;600;700&family=Aref+Ruqaa:wght@400;700&display=swap" rel="stylesheet" />
            </Head>

            <main className={`${styles.container} ${darkMode ? styles.darkMode : ''}`} ref={containerRef}>
                <ParticlesBackground darkMode={darkMode} />
                <BackgroundPatterns scrollY={scrollY} />

                <ParallaxHero darkMode={darkMode} />

                <motion.div
                    className={styles.cardContainer}
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        className={`${styles.card} ${darkMode ? styles.darkCard : ''}`}
                        variants={fadeInUp}
                        style={{
                            transform: `translateY(${scrollY * 0.05}px)`,
                        }}
                    >
                        <FloatingElements />

                        <div className={styles.mainContent}>
                            <motion.div
                                className={styles.arabicContainer}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                <div className={styles.arabicBg}></div>
                                <div className={styles.arabic}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
                            </motion.div>

                            <motion.p
                                variants={fadeInUp}
                                className={styles.greeting}
                            >
                                Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
                            </motion.p>

                            <motion.p
                                variants={fadeInUp}
                                className={styles.invitation}
                            >
                                Dengan mengharap ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i alumni SDN Kemanggisan 17 Pagi untuk menghadiri acara:
                            </motion.p>

                            <motion.h2
                                ref={refTitle}
                                className={styles.eventTitle}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inViewTitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <span className={styles.titleDecoration}></span>
                                Buka Puasa Bersama
                                <span className={styles.titleDecoration}></span>
                            </motion.h2>

                            <EventInfo darkMode={darkMode} />

                            <motion.p
                                variants={fadeInUp}
                                className={styles.message}
                            >
                                Mari kita jalin silaturahmi dan kenangan bersama teman-teman lama di bulan Ramadhan yang penuh berkah ini.
                            </motion.p>

                            <CountdownTimer targetDate="Mar 16, 2025 17:30:00" darkMode={darkMode} />

                            <Timeline />

                            <motion.a
                                href="https://wa.me/6285772446599?text=Saya%20akan%20hadir%20di%20acara%20bukber%20alumni%20SDN%20Kemanggisan%2017%20Pagi"
                                className={`${styles.button} ${darkMode ? styles.darkButton : ''}`}
                                variants={fadeInUp}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: darkMode ?
                                        "0 15px 25px rgba(78, 39, 204, 0.3)" :
                                        "0 15px 25px rgba(18, 92, 19, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FontAwesomeIcon icon={faWhatsapp} /> Konfirmasi Kehadiran
                            </motion.a>

                            <motion.div
                                className={styles.footer}
                                variants={fadeInUp}
                            >
                                <p>
                                    Mohon konfirmasi kehadiran paling lambat 10 Maret 2025<br />
                                    Untuk informasi lebih lanjut hubungi: 085-7724-46599 (Panitia)
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.button
                    className={styles.themeToggle}
                    onClick={() => setDarkMode(!darkMode)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {darkMode ? '☀️' : '🌙'}
                </motion.button>
            </main>
        </>
    );
}