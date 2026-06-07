import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const skills = [
  { name: 'React', room: 'Living Room · Mug', color: 'from-cyan-400 to-blue-500' },
  { name: 'Symfony', room: 'Living Room · Mug', color: 'from-slate-400 to-slate-700' },
  { name: 'Three.js', room: 'Living Room · Mug', color: 'from-zinc-200 to-zinc-500' },
  { name: 'Blender', room: 'Living Room · Mug', color: 'from-orange-400 to-amber-600' },
  { name: 'Python', room: 'Bathroom · Soap', color: 'from-yellow-300 to-blue-500' },
  { name: 'HTML', room: 'Bathroom · Soap', color: 'from-orange-500 to-red-500' },
  { name: 'CSS', room: 'Bathroom · Soap', color: 'from-blue-400 to-indigo-600' },
  { name: 'JavaScript', room: 'Bathroom · Soap', color: 'from-yellow-300 to-yellow-500' },
];

const education = [
  { year: '2020 – 2022', title: 'DUT Informatique', place: 'La Rochelle University' },
  { year: '2022 – 2023', title: 'Licence Pro Web', place: 'Bordeaux University' },
  { year: '2023 – 2025', title: 'Master Informatique', place: 'Bordeaux University' },
];

const passions = [
  { label: 'Vinyl Records', detail: 'Collecting & spinning analog sound.' },
  { label: 'Boxing', detail: 'I practice boxing to stay sharp.' },
  { label: 'Three.js Journey', detail: 'Certified — by Bruno Simon.' },
  { label: 'Shaders / GLSL', detail: 'Particles, smoke & TV noise.' },
];

const Test = () => {
  useEffect(() => {
    document.title = "Maxime's World · Kame House Portfolio (Test Page)";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-blue-600 text-slate-900 relative overflow-hidden">
      {/* Sun */}
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-yellow-200 blur-3xl opacity-80" aria-hidden />
      {/* Ocean */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-800 via-blue-600 to-transparent pointer-events-none" aria-hidden />

      <section className="relative z-10 pt-32 pb-24 px-6 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="uppercase tracking-[0.4em] text-sm text-slate-800/80"
        >
          Test Page · Inspired by KameHousePortfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
          className="mt-6 text-6xl md:text-8xl font-bold tracking-tight"
          style={{ fontFamily: "'MedievalSharp', serif" }}
        >
          Maxime's World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-xl text-slate-800 max-w-2xl mx-auto"
        >
          Maxime Guillon — Creative Developer & Computer Science student at Bordeaux University.
          Step inside the Kame House and tour an immersive portfolio built with React, Three.js, GSAP and GLSL shaders.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-5">
          <a href="https://github.com/maximeguillon" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/30 backdrop-blur hover:bg-white/50 transition">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/maximeguillon" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/30 backdrop-blur hover:bg-white/50 transition">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/maxxiiime___" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/30 backdrop-blur hover:bg-white/50 transition">
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com/codingstella/KameHousePortfolio"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
          >
            View Source <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* Kame House icon */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto -mt-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="mx-auto w-fit"
        >
          <div className="relative flex flex-col items-center">
            <div className="w-0 h-0 border-l-[80px] border-r-[80px] border-b-[60px] border-l-transparent border-r-transparent border-b-red-500" />
            <div className="w-40 h-32 bg-pink-300 border-4 border-red-600 flex items-center justify-center text-3xl font-bold text-red-700" style={{ fontFamily: "'MedievalSharp', serif" }}>
              亀
            </div>
            <p className="mt-3 text-slate-900/80 text-sm uppercase tracking-widest">Kame House</p>
          </div>
        </motion.div>
      </section>

      {/* Skills as rooms */}
      <section className="relative z-10 mt-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center" style={{ fontFamily: "'MedievalSharp', serif" }}>
          Tour the Rooms
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: smoothEase }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${s.color} text-white shadow-xl hover:scale-[1.03] transition-transform`}
            >
              <p className="text-xs uppercase tracking-widest opacity-80">{s.room}</p>
              <p className="mt-3 text-2xl font-bold">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="relative z-10 mt-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white drop-shadow" style={{ fontFamily: "'MedievalSharp', serif" }}>
          Education
        </h2>
        <div className="space-y-4">
          {education.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: smoothEase }}
              className="rounded-xl bg-white/80 backdrop-blur p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
            >
              <div>
                <p className="font-bold text-lg">{e.title}</p>
                <p className="text-slate-600 text-sm">{e.place}</p>
              </div>
              <span className="text-sm font-medium text-slate-700">{e.year}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Passions */}
      <section className="relative z-10 mt-24 px-6 max-w-5xl mx-auto pb-32">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white drop-shadow" style={{ fontFamily: "'MedievalSharp', serif" }}>
          Passions
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {passions.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: smoothEase }}
              className="rounded-2xl bg-slate-900/85 text-white p-6 backdrop-blur"
            >
              <p className="text-xl font-bold">{p.label}</p>
              <p className="mt-2 text-slate-300">{p.detail}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-16 text-white/90 text-sm">
          See you soon — built as a tribute to{' '}
          <a className="underline" href="https://github.com/Maxxiiime/KameHousePortfolio" target="_blank" rel="noreferrer">
            Maxxiiime/KameHousePortfolio
          </a>
        </p>
      </section>
    </main>
  );
};

export default Test;
