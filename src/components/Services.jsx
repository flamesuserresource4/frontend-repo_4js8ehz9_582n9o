import { motion } from 'framer-motion';
import { Image, Video, Sparkles, Layers } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Generative AI Suite',
    desc: 'Text-to-image, style transfer, and prompt orchestration with batch upscaling.',
    gradient: 'from-emerald-400 to-cyan-500',
  },
  {
    icon: Image,
    title: 'Image Studio',
    desc: 'Super-resolution, background removal, relighting, and 3D parallax posters.',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Video,
    title: 'Video Lab',
    desc: 'Storyboarding, motion generation, AutoCut, captions, and LUT-based color grading.',
    gradient: 'from-emerald-400 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Story Animations',
    desc: 'Scene graph editor with timelines, keyframes, and dynamic camera paths.',
    gradient: 'from-teal-400 to-cyan-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-[#031727] via-[#031b31] to-[#02101b]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_20%,rgba(34,197,94,0.10),transparent),radial-gradient(600px_200px_at_80%_80%,rgba(56,189,248,0.10),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-white"
        >
          Generative AI Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-cyan-100/80 max-w-2xl"
        >
          Modular tools for creators — pick what you need, combine freely, and render with cinematic quality.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${s.gradient} opacity-20 blur-2xl`} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className={`grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br ${s.gradient} text-white shadow-lg shadow-cyan-500/20`}>
                    <s.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-cyan-100/85 leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Fast', 'HD', 'Batch', 'API'].map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-cyan-100/80 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute inset-x-0 -bottom-10 h-24 bg-gradient-to-t from-white/10 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DetailCard
            title="Image Generation & Editing"
            items={['Prompt-based synthesis', 'In/outpainting', 'Relighting & tone mapping', 'Depth-to-3D parallax']}
          />
          <DetailCard
            title="Video Intelligence"
            items={['Text-to-motion', 'AutoCut scenes', 'Dynamic captions', 'Style-consistent color']}
          />
          <DetailCard
            title="Story Animation"
            items={['Keyframe timelines', 'Camera rigs', 'Scene graphs', 'Beat-synced transitions']}
          />
        </div>
      </div>
    </section>
  );
}

function DetailCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-xl"
    >
      <h4 className="text-white font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="text-sm text-cyan-100/85 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
            {it}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
