import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import styles from '@/styles/ParticlesBackground.module.css';

export default function ParticlesBackground({ darkMode }) {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // Particles are loaded
    }, []);

    return (
        <Particles
            id="tsparticles"
            className={styles.particles}
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    opacity: 0
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: darkMode ? "#ffffff" : "#125C13"
                    },
                    links: {
                        color: darkMode ? "#4444aa" : "#125C13",
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 1
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce"
                        },
                        random: true,
                        speed: 0.5,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 30
                    },
                    opacity: {
                        value: darkMode ? 0.3 : 0.15
                    },
                    shape: {
                        type: ["circle", "polygon"],
                        options: {
                            polygon: {
                                sides: 6
                            }
                        }
                    },
                    size: {
                        value: { min: 1, max: 4 }
                    }
                },
                detectRetina: true
            }}
        />
    );
}