import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from '@/styles/CountdownTimer.module.css';

export default function CountdownTimer({ targetDate, darkMode }) {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const countDownDate = new Date(targetDate).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0')
            });

        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div
            ref={ref}
            className={`${styles.countdown} ${darkMode ? styles.darkCountdown : ''}`}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
        >
            <div className={styles.countdownTitle}>
                <span className={styles.decorativeLine}></span>
                <h3>Menuju Acara</h3>
                <span className={styles.decorativeLine}></span>
            </div>

            <div className={styles.countdownItems}>
                <motion.div className={styles.countdownItem} variants={item}>
                    <span className={styles.countdownValue}>{timeLeft.days}</span>
                    <span className={styles.countdownLabel}>Hari</span>
                    <svg className={styles.svgBorder} width="100%" height="100%" viewBox="0 0 100 100">
                        <circle className={styles.circleBg} cx="50" cy="50" r="45" />
                        <circle className={styles.circleIndicator} cx="50" cy="50" r="45" />
                    </svg>
                </motion.div>

                <motion.div className={styles.countdownItem} variants={item}>
                    <span className={styles.countdownValue}>{timeLeft.hours}</span>
                    <span className={styles.countdownLabel}>Jam</span>
                    <svg className={styles.svgBorder} width="100%" height="100%" viewBox="0 0 100 100">
                        <circle className={styles.circleBg} cx="50" cy="50" r="45" />
                        <circle className={styles.circleIndicator} cx="50" cy="50" r="45" />
                    </svg>
                </motion.div>

                <motion.div className={styles.countdownItem} variants={item}>
                    <span className={styles.countdownValue}>{timeLeft.minutes}</span>
                    <span className={styles.countdownLabel}>Menit</span>
                    <svg className={styles.svgBorder} width="100%" height="100%" viewBox="0 0 100 100">
                        <circle className={styles.circleBg} cx="50" cy="50" r="45" />
                        <circle className={styles.circleIndicator} cx="50" cy="50" r="45" />
                    </svg>
                </motion.div>

                <motion.div className={styles.countdownItem} variants={item}>
                    <span className={styles.countdownValue}>{timeLeft.seconds}</span>
                    <span className={styles.countdownLabel}>Detik</span>
                    <svg className={styles.svgBorder} width="100%" height="100%" viewBox="0 0 100 100">
                        <circle className={styles.circleBg} cx="50" cy="50" r="45" />
                        <circle className={styles.circleIndicator} cx="50" cy="50" r="45" />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
}