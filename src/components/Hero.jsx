import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-6xl font-semibold text-white drop-shadow-md"
          >
            Multimodal AI Sandbox Studio
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-cyan-100/90 text-base md:text-lg max-w-2xl"
          >
            Design stunning visuals, generate media, and animate immersive stories — all with premium 3D flair.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#services"
              className="rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 px-5 py-3 text-white shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
            >
              Explore Services
            </a>
            <a
              href="#blender"
              className="rounded-xl bg-white/10 backdrop-blur px-5 py-3 text-cyan-50 border border-white/15 hover:bg-white/15 transition"
            >
              Blender Editing Suite
            </a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031727] via-transparent to-transparent" />
    </section>
  );
}
