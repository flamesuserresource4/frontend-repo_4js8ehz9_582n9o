import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), 2200);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-900 via-cyan-900 to-blue-900"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl p-8 md:p-12 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
          >
            <div className="mx-auto h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-blue-500 shadow-[0_0_60px_10px_rgba(56,189,248,0.25)]" />
            <h1 className="mt-6 text-center text-2xl md:text-4xl font-semibold tracking-tight text-white">
              Multimodal AI Sandbox Studio
            </h1>
            <p className="mt-2 text-center text-sm md:text-base text-cyan-100/80">
              Craft. Animate. Generate. In one premium studio.
            </p>
            <div className="relative mt-6 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
                className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400"
              />
            </div>
          </motion.div>
          <div className="pointer-events-none absolute -inset-14 blur-3xl opacity-50 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.35),transparent_60%)]" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
