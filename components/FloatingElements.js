import { useEffect, useState } from 'react';
import styles from '@/styles/FloatingElements.module.css';

export default function FloatingElements() {
    const [randomPositions, setRandomPositions] = useState([]);

    useEffect(() => {
        // Create random positions for decorative elements
        const positions = [];
        for (let i = 0; i < 15; i++) {
            positions.push({
                top: Math.random() * 100,
                left: Math.random() * 100,
                size: 5 + Math.random() * 10,
                animationDelay: Math.random() * 5,
                animationDuration: 5 + Math.random() * 10,
            });
        }
        setRandomPositions(positions);
    }, []);

    return (
        <div className={styles.floatingElementsContainer}>
            {randomPositions.map((pos, index) => (
                <div
                    key={index}
                    className={styles.floatingElement}
                    style={{
                        top: `${pos.top}%`,
                        left: `${pos.left}%`,
                        width: `${pos.size}px`,
                        height: `${pos.size}px`,
                        animationDelay: `${pos.animationDelay}s`,
                        animationDuration: `${pos.animationDuration}s`,
                    }}
                ></div>
            ))}
        </div>
    );
}