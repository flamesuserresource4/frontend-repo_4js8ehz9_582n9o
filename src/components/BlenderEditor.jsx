import { motion } from 'framer-motion';
import { Sliders, Camera, Layers, Wand2 } from 'lucide-react';

export default function BlenderEditor() {
  return (
    <section id="blender" className="relative py-20 bg-gradient-to-b from-[#02101b] to-[#020a11]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_300px_at_50%_0%,rgba(34,197,94,0.12),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-start gap-10"
        >
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-semibold text-white">Blender Editing Page</h2>
            <p className="mt-3 text-cyan-100/85 max-w-2xl">
              A focused workspace for 3D editing and animation handoff. Import scenes, tweak materials, set camera rigs, and render with studio-grade lighting presets.
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Sliders, label: 'Materials' },
                { icon: Camera, label: 'Cameras' },
                { icon: Layers, label: 'Collections' },
                { icon: Wand2, label: 'Procedurals' },
              ].map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl text-cyan-100/90 flex items-center gap-3"
                >
                  <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                    <f.icon size={18} />
                  </div>
                  <span className="text-sm">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="relative w-full aspect-video rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#081b2a] to-[#0b1f33]">
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div key={i} className="border border-white/5" />
                ))}
              </div>
              <div className="absolute inset-x-0 top-0 h-12 bg-black/40 backdrop-blur-sm flex items-center gap-2 px-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="h-3 w-3 rounded-full bg-cyan-400" />
                <span className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="ml-3 text-cyan-100/80 text-sm">Editor Preview</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="h-36 w-36 md:h-48 md:w-48 rotate-45 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 opacity-90 rounded-[2rem] shadow-[0_0_120px_20px_rgba(56,189,248,0.25)]" />
                  <div className="pointer-events-none absolute -inset-10 blur-3xl bg-[conic-gradient(from_0deg,rgba(16,185,129,0.35),rgba(56,189,248,0.35),rgba(59,130,246,0.35),transparent)]" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between bg-black/30 backdrop-blur">
                <div className="flex items-center gap-2 text-cyan-100/80 text-xs">
                  <span>1920×1080</span>
                  <span>•</span>
                  <span>30 fps</span>
                </div>
                <button className="rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-white text-xs shadow">
                  Render Preview
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
