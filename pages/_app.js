import '@/styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// Prevent Font Awesome from adding its CSS since we're doing it manually
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;