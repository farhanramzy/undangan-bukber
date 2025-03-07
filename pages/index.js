import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarAlt,
    faClock,
    faMapMarkerAlt,
    faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';
import { faMosque } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from '@/components/Header';
import CountdownTimer from '@/components/CountdownTimer';
import EventInfo from '@/components/EventInfo';
import styles from '@/styles/Home.module.css';

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const { ref: refTitle, inView: inViewTitle } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <Head>
                <title>Undangan Bukber Alumni SDN Kemanggisan 17 Pagi</title>
                <meta name="description" content="Undangan Buka Puasa Bersama Ramadhan 1446H" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <main className={styles.container}>
                <div className={`${styles.card} ${isLoaded ? styles.fadeIn : ''}`}>
                    <Header />

                    <div className={styles.mainContent}>
                        <div className={styles.decoration1}></div>
                        <div className={styles.decoration2}></div>

                        <div className={`${styles.arabic} ${isLoaded ? styles.fadeIn : ''}`}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>

                        <p className={`${styles.slideUp} ${isLoaded ? styles.visible : ''}`}>
                            Assalamu&apos;alaikum Warahmatullahi Wabarakatuh
                        </p>

                        <p className={`${styles.slideUp} ${isLoaded ? styles.visible : ''}`} style={{ animationDelay: '100ms' }}>
                            Dengan mengharap ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i alumni SDN Kemanggisan 17 Pagi untuk menghadiri acara:
                        </p>

                        <h2
                            ref={refTitle}
                            className={`${styles.eventTitle} ${inViewTitle ? styles.visible : ''}`}
                        >
                            Buka Puasa Bersama
                        </h2>

                        <EventInfo />

                        <p className={`${styles.slideUp} ${isLoaded ? styles.visible : ''}`} style={{ animationDelay: '300ms' }}>
                            Mari kita jalin silaturahmi dan kenangan bersama teman-teman lama di bulan Ramadhan yang penuh berkah ini.
                        </p>

                        <CountdownTimer targetDate="Mar 16, 2025 17:30:00" />

                        <a
                            href="https://wa.me/6285772446599?text=Saya%20akan%20hadir%20di%20acara%20bukber%20alumni%20SDN%20Kemanggisan%2017%20Pagi"
                            className={`${styles.button} ${isLoaded ? styles.slideUp + ' ' + styles.visible : ''}`}
                            style={{ animationDelay: '500ms' }}
                        >
                            <FontAwesomeIcon icon={faWhatsapp} /> Konfirmasi Kehadiran
                        </a>

                        <div className={`${styles.footer} ${isLoaded ? styles.slideUp + ' ' + styles.visible : ''}`} style={{ animationDelay: '600ms' }}>
                            <p>
                                Mohon konfirmasi kehadiran paling lambat 10 Maret 2025<br />
                                Untuk informasi lebih lanjut hubungi: 085-7724-46599 (Panitia)
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}