import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Associate Professor',
    org: 'MIT — Department of Computer Science',
    avatar: 'SM',
    avatarColor: '#4F7CFF',
    rating: 5,
    review:
      'LearnovaAI has completely transformed how I review student submissions. The AI detection accuracy is remarkable — it catches paraphrased content that other tools miss entirely. I\'ve been recommending it to every department.',
  },
  {
    name: 'James Okonkwo',
    role: 'Research Lead',
    org: 'Stanford AI Lab',
    avatar: 'JO',
    avatarColor: '#8B5CF6',
    rating: 5,
    review:
      'We process hundreds of research papers every month. LearnovaAI\'s speed is incredible — under 3 seconds per document. The detailed source reports save our team hours of manual verification work every week.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Content Director',
    org: 'TechCrunch Media',
    avatar: 'ER',
    avatarColor: '#00D4FF',
    rating: 5,
    review:
      'As a media company, originality is everything. LearnovaAI\'s AI detection feature has been a game-changer for identifying AI-generated content submitted to our editorial team. Absolutely essential tool.',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-label="Customer testimonials"
    >
      <div
        className="orb w-[500px] h-[500px] opacity-6 bottom-0 left-[-100px]"
        style={{ background: 'radial-gradient(circle, #4F7CFF, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#F59E0B]/30 mb-5">
            <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
            <span className="text-xs font-semibold text-[#94A3B8]">Loved by Professionals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            What Our Users <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Join thousands of academics, researchers, and content professionals who trust LearnovaAI daily.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-hover relative group rounded-2xl p-6 flex flex-col"
              style={{
                background: '#151C2F',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Quote icon */}
              <Quote
                className="w-8 h-8 mb-4 opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ color: testimonial.avatarColor }}
              />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-[#CBD5E1] leading-relaxed flex-1 mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-5"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.avatarColor}, ${testimonial.avatarColor}99)`,
                    boxShadow: `0 0 16px ${testimonial.avatarColor}40`,
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-[#94A3B8]">{testimonial.role}</div>
                  <div className="text-xs text-[#475569]">{testimonial.org}</div>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${testimonial.avatarColor}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {['#4F7CFF', '#8B5CF6', '#00D4FF', '#22C55E', '#F59E0B'].map((c, i) => (
                <div
                  key={c}
                  className="w-7 h-7 rounded-full border-2 border-[#0B1020] -ml-1.5 first:ml-0 flex items-center justify-center text-[8px] font-bold text-white"
                  style={{ background: c, zIndex: 5 - i }}
                />
              ))}
            </div>
            <span className="text-sm text-[#94A3B8]">
              <span className="text-white font-semibold">10,000+</span> happy users
            </span>
          </div>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
            ))}
            <span className="text-sm text-[#94A3B8]">
              <span className="text-white font-semibold">4.9/5</span> average rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
