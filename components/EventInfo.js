import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarAlt,
    faClock,
    faMapMarkerAlt,
    faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import styles from '@/styles/EventInfo.module.css';

export default function EventInfo() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`${styles.eventInfo} ${inView ? styles.visible : ''}`}
        >
            <div className={`${styles.infoItem} ${styles.slideInLeft} ${inView ? styles.visible : ''}`}>
                <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <div className={styles.infoContent}>
                    <strong>Hari/Tanggal</strong>
                    Minggu, 16 Maret 2025
                </div>
            </div>

            <div className={`${styles.infoItem} ${styles.slideInRight} ${inView ? styles.visible : ''}`}>
                <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className={styles.infoContent}>
                    <strong>Waktu</strong>
                    17.30 - 21.00 WIB
                </div>
            </div>

            <div className={`${styles.infoItem} ${styles.slideInLeft} ${inView ? styles.visible : ''}`}>
                <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className={styles.infoContent}>
                    <strong>Tempat</strong>
                    Royal Palm Hotel<br />
                    Blk. C1, Jkt Outer Ring Road Jl. Taman Palem Mutiara,<br />
                    Cengkareng Tim., Kecamatan Cengkareng,<br />
                    Kota Jakarta Barat, DKI Jakarta 11730
                </div>
            </div>

            <div className={`${styles.infoItem} ${styles.slideInRight} ${inView ? styles.visible : ''}`}>
                <div className={styles.infoIcon}>
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                </div>
                <div className={styles.infoContent}>
                    <strong>Kontribusi</strong>
                    Rp 168.000/orang
                </div>
            </div>
        </div>
    );
}