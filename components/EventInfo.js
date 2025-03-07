import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarAlt,
    faClock,
    faMapMarkerAlt,
    faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from '@/styles/EventInfo.module.css';

// Import the react-tilt component for 3D tilt effects
import Tilt from 'react-parallax-tilt';

export default function EventInfo({ darkMode }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    // Options for the tilt effect
    const tiltOptions = {
        reverse: false,
        max: 15,
        perspective: 1000,
        scale: 1.05,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    return (
        <motion.div
            ref={ref}
            className={`${styles.eventInfo} ${darkMode ? styles.darkEventInfo : ''}`}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
        >
            <Tilt options={tiltOptions}>
                <motion.div className={`${styles.infoItem} ${styles.glassCard}`} variants={item}>
                    <div className={styles.infoIconContainer}>
                        <div className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </div>
                    </div>
                    <div className={styles.infoContent}>
                        <strong>Hari/Tanggal</strong>
                        Minggu, 16 Maret 2025
                    </div>
                </motion.div>
            </Tilt>

            <Tilt options={tiltOptions}>
                <motion.div className={`${styles.infoItem} ${styles.glassCard}`} variants={item}>
                    <div className={styles.infoIconContainer}>
                        <div className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                    </div>
                    <div className={styles.infoContent}>
                        <strong>Waktu</strong>
                        17.30 - 21.00 WIB
                    </div>
                </motion.div>
            </Tilt>

            <Tilt options={tiltOptions}>
                <motion.div className={`${styles.infoItem} ${styles.glassCard}`} variants={item}>
                    <div className={styles.infoIconContainer}>
                        <div className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                    </div>
                    <div className={styles.infoContent}>
                        <a
                            href="https://maps.app.goo.gl/YnkpoWgAyZ5tepHx5"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#4caf50', textDecoration: 'none' }}
                        >
                            <strong>Tempat</strong><br />
                            Royal Palm Hotel<br />
                            Blk. C1, Jkt Outer Ring Road Jl. Taman Palem Mutiara,<br />
                            Cengkareng Tim., Kecamatan Cengkareng,<br />
                            Kota Jakarta Barat, DKI Jakarta 11730
                        </a>
                    </div>
                </motion.div>
            </Tilt>

            <Tilt options={tiltOptions}>
                <motion.div className={`${styles.infoItem} ${styles.glassCard}`} variants={item}>
                    <div className={styles.infoIconContainer}>
                        <div className={styles.infoIcon}>
                            <FontAwesomeIcon icon={faMoneyBillWave} />
                        </div>
                    </div>
                    <div className={styles.infoContent}>
                        <strong>Biaya</strong>
                        Rp 168.000/orang
                    </div>
                </motion.div>
            </Tilt>
        </motion.div>
    );
}