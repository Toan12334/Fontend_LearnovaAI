import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How accurate is AI detection?',
    a: 'LearnovaAI achieves 98%+ accuracy in detecting plagiarism and AI-generated content. Our model is trained on over 100 billion documents and continuously updated to detect the latest AI writing tools including GPT-4, Claude, Gemini, and others. We use ensemble methods combining multiple detection models to minimize false positives.',
  },
  {
    q: 'Does it support multiple languages?',
    a: 'Yes! LearnovaAI supports 50+ languages including English, Spanish, French, German, Italian, Portuguese, Chinese (Simplified & Traditional), Japanese, Korean, Arabic, Russian, Hindi, and many more. Our AI models are fully multilingual with native understanding of grammar and semantics in each language.',
  },
  {
    q: 'Can I upload PDF files?',
    a: 'Absolutely. We support PDF, DOCX, DOC, TXT, RTF, ODT, and HTML formats. Files can be up to 50MB in size and 100,000 words per document. We also support batch processing for enterprise users who need to analyze multiple documents simultaneously.',
  },
  {
    q: 'Is my data secure?',
    a: 'Your privacy is our top priority. All documents are encrypted in transit (TLS 1.3) and at rest (AES-256). We never store your documents after analysis is complete. LearnovaAI is fully GDPR, FERPA, and CCPA compliant. We are SOC 2 Type II certified and undergo annual third-party security audits.',
  },
  {
    q: 'Can teachers use it?',
    a: 'Absolutely — LearnovaAI is built with educators in mind. We offer LMS integrations (Canvas, Moodle, Blackboard), class management tools, bulk submission checking, and special pricing for educational institutions. Teachers can create class rosters, share reports with students, and track integrity over time.',
  },
  {
    q: 'How does it compare to Turnitin or Grammarly?',
    a: 'LearnovaAI combines the best of both worlds: enterprise-grade similarity detection (like Turnitin) with cutting-edge AI content detection. We are faster, more affordable, and our AI detection is significantly more accurate. Unlike Turnitin, we don\'t retain your documents in a student paper database without your consent.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: open ? 'rgba(79,124,255,0.05)' : '#151C2F',
        border: open ? '1px solid rgba(79,124,255,0.3)' : '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={`text-sm font-semibold transition-colors duration-200 pr-4 ${open ? 'text-[#4F7CFF]' : 'text-white group-hover:text-[#4F7CFF]'}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            className="w-5 h-5 transition-colors"
            style={{ color: open ? '#4F7CFF' : '#94A3B8' }}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-sm text-[#94A3B8] leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 relative overflow-hidden"
      aria-label="Frequently asked questions"
    >
      <div
        className="orb w-[400px] h-[400px] opacity-6 top-0 left-0"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#4F7CFF]/30 mb-5">
            <HelpCircle className="w-3.5 h-3.5 text-[#4F7CFF]" />
            <span className="text-xs font-semibold text-[#94A3B8]">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-[#94A3B8] text-lg">
            Everything you need to know about LearnovaAI. Can't find an answer?{' '}
            <a href="#" className="text-[#4F7CFF] hover:underline">Contact us</a>.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
