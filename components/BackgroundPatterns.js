import { useEffect, useState } from 'react';
import styles from '@/styles/BackgroundPatterns.module.css';

export default function BackgroundPatterns({ scrollY }) {
    const [patterns, setPatterns] = useState([]);

    useEffect(() => {
        // Create pattern positions
        const patternPositions = [
            { top: '10%', left: '5%', rotation: 15, scale: 0.8 },
            { top: '25%', right: '8%', rotation: -10, scale: 1.2 },
            { top: '50%', left: '12%', rotation: 25, scale: 0.9 },
            { top: '70%', right: '15%', rotation: -20, scale: 1 },
            { top: '85%', left: '20%', rotation: 5, scale: 1.1 },
        ];
        setPatterns(patternPositions);
    }, []);

    return (
        <div className={styles.patternsContainer}>
            {patterns.map((pattern, index) => (
                <div
                    key={index}
                    className={styles.pattern}
                    style={{
                        top: pattern.top,
                        left: pattern.left,
                        right: pattern.right,
                        transform: `rotate(${pattern.rotation}deg) scale(${pattern.scale}) translateY(${scrollY * 0.05}px)`,
                    }}
                ></div>
            ))}
        </div>
    );
}
