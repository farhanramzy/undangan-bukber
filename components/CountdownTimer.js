import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/CountdownTimer.module.css';

export default function CountdownTimer({ targetDate }) {
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

    return (
        <div
            ref={ref}
            className={`${styles.countdown} ${inView ? styles.visible : ''}`}
        >
            <div className={styles.countdownItem}>
                <span className={styles.countdownValue}>{timeLeft.days}</span>
                <span className={styles.countdownLabel}>Hari</span>
            </div>
            <div className={styles.countdownItem}>
                <span className={styles.countdownValue}>{timeLeft.hours}</span>
                <span className={styles.countdownLabel}>Jam</span>
            </div>
            <div className={styles.countdownItem}>
                <span className={styles.countdownValue}>{timeLeft.minutes}</span>
                <span className={styles.countdownLabel}>Menit</span>
            </div>
            <div className={styles.countdownItem}>
                <span className={styles.countdownValue}>{timeLeft.seconds}</span>
                <span className={styles.countdownLabel}>Detik</span>
            </div>
        </div>
    );
}