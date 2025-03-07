import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Timeline.module.css'; // Make sure this path is correct

export default function Timeline() {
    const [events, setEvents] = useState([
        {
            year: '2004-2010',
            title: 'Masa Sekolah',
            description: 'Kenangan indah di SDN Kemanggisan 17 Pagi dengan teman-teman sekelas.'
        },
        {
            year: '2012',
            title: 'Reuni Pertama',
            description: 'Pertemuan kembali setelah bertahun-tahun berpisah.'
        },
        {
            year: '2015',
            title: 'Bukber Perdana',
            description: 'Buka puasa bersama pertama kali diadakan untuk alumni.'
        },
        {
            year: '2025',
            title: 'Bukber Ramadhan 1446H',
            description: 'Mari berkumpul kembali dan mengenang masa-masa indah bersama.'
        }
    ]);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -50 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            className={styles.timelineContainer}
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
        >
            <h3 className={styles.timelineTitle}>Perjalanan Kebersamaan Kita</h3>

            <div className={styles.timeline}>
                <div className={styles.timelineLine}></div>

                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        className={styles.timelineEvent}
                        variants={item}
                    >
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineYear}>{event.year}</div>
                            <h4 className={styles.timelineEventTitle}>{event.title}</h4>
                            <p className={styles.timelineDescription}>{event.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}