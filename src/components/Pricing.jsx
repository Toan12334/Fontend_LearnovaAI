import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, ArrowRight } from 'lucide-react';

const b2cPlans = [
  {
    name: 'Free Basic',
    price: '0 VND',
    period: 'forever',
    description: 'Perfect for basic use',
    color: '#94A3B8',
    gradient: 'from-[#94A3B8]/10 to-transparent',
    border: 'rgba(148,163,184,0.2)',
    icon: Shield,
    features: [
      '2 scans/month',
      'Similarity score',
      'Summary report'
    ],
    disabled: ['Semantic plagiarism detection', 'AI-assisted feedback', 'Batch uploads', 'Fake-reference validation'],
    cta: 'Get Started Free',
    ctaStyle: 'border border-white/20 hover:border-white/40 hover:bg-white/5',
    popular: false,
  },
  {
    name: 'Student Plus',
    price: '79,000 VND',
    period: 'per month',
    description: 'Best for students and researchers',
    color: '#4F7CFF',
    gradient: 'from-[#4F7CFF]/15 to-[#8B5CF6]/10',
    border: 'rgba(79,124,255,0.5)',
    icon: Zap,
    features: [
      '30 scans/month',
      'Semantic plagiarism detection',
      'AI-assisted feedback',
      'Citation suggestions',
      'Similarity score',
      'Summary report'
    ],
    disabled: ['Batch uploads', 'Classroom dashboard', 'Fake-reference validation'],
    cta: 'Start Student Plus',
    ctaStyle: 'btn-gradient',
    popular: true,
  },
  {
    name: 'Lecturer Pro',
    price: '199,000 VND',
    period: 'per month',
    description: 'For educators and heavy users',
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/10 to-transparent',
    border: 'rgba(139,92,246,0.3)',
    icon: Star,
    features: [
      '100 scans/month',
      'Batch uploads',
      'Classroom dashboard',
      'Fake-reference validation',
      'Semantic plagiarism detection',
      'AI-assisted feedback',
      'Citation suggestions',
      'Similarity score',
      'Summary report'
    ],
    disabled: [],
    cta: 'Get Lecturer Pro',
    ctaStyle: 'border border-[#8B5CF6]/50 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10',
    popular: false,
  },
];

const b2bPlans = [
  {
    name: 'API Starter',
    price: '30M VND',
    period: 'per year',
    description: '10,000 API calls',
    color: '#94A3B8',
    gradient: 'from-[#94A3B8]/10 to-transparent',
    border: 'rgba(148,163,184,0.2)',
    icon: Shield,
    features: [
      'Semantic plagiarism API',
      'Standard JSON outputs',
      'Integration support',
      '10,000 API calls/year'
    ],
    disabled: ['AI detection', 'Citation validation', 'Dedicated infrastructure', 'Custom deployment'],
    cta: 'Start API Starter',
    ctaStyle: 'border border-white/20 hover:border-white/40 hover:bg-white/5',
    popular: false,
  },
  {
    name: 'API Enterprise',
    price: '100M VND',
    period: 'per year',
    description: '60,000 API calls',
    color: '#4F7CFF',
    gradient: 'from-[#4F7CFF]/15 to-[#8B5CF6]/10',
    border: 'rgba(79,124,255,0.5)',
    icon: Zap,
    features: [
      'Full API suite',
      'AI detection',
      'Citation validation',
      '24/7 SLA',
      'Semantic plagiarism API',
      'Standard JSON outputs',
      'Integration support',
      '60,000 API calls/year'
    ],
    disabled: ['Dedicated infrastructure', 'Custom deployment'],
    cta: 'Start Enterprise',
    ctaStyle: 'btn-gradient',
    popular: true,
  },
  {
    name: 'Custom Volume',
    price: 'Custom',
    period: 'contract',
    description: 'For large scale operations',
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/10 to-transparent',
    border: 'rgba(139,92,246,0.3)',
    icon: Star,
    features: [
      'Dedicated infrastructure',
      'Enterprise SLA',
      'Custom deployment',
      'Full API suite',
      'AI detection',
      'Citation validation',
      'Custom API calls volume'
    ],
    disabled: [],
    cta: 'Contact Sales',
    ctaStyle: 'border border-[#8B5CF6]/50 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10',
    popular: false,
  },
];

export default function Pricing() {
  const [pricingType, setPricingType] = useState('b2c'); // 'b2c' or 'b2b'

  const currentPlans = pricingType === 'b2c' ? b2cPlans : b2bPlans;

  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden"
      aria-label="Pricing plans"
    >
      <div
        className="orb w-[600px] h-[600px] opacity-6 top-0 right-[-200px]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#8B5CF6]/30 mb-5">
            <Star className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span className="text-xs font-semibold text-[#94A3B8]">Flexible Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Plans for <span className="gradient-text">Every Need</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">
            Whether you are a student, educator, or an enterprise needing API access, we have you covered.
          </p>

          {/* Type toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl" style={{ background: '#151C2F', border: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setPricingType('b2c')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                pricingType === 'b2c'
                  ? 'text-white btn-gradient shadow-md'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              B2C Plans
            </button>
            <button
              onClick={() => setPricingType('b2b')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                pricingType === 'b2b'
                  ? 'text-white btn-gradient shadow-md'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              B2B API Plans
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {currentPlans.map((plan, i) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                style={{
                  background: plan.popular
                    ? 'linear-gradient(135deg, #1a2445 0%, #1e1640 100%)'
                    : '#151C2F',
                  border: `1px solid ${plan.border}`,
                  boxShadow: plan.popular ? '0 0 60px rgba(79,124,255,0.2)' : 'none',
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-bold text-white rounded-full btn-gradient shadow-lg whitespace-nowrap">
                      ✨ Most Popular
                    </span>
                  </div>
                )}

                {/* Plan icon & name */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <div>
                    <div className="font-bold text-white">{plan.name}</div>
                    <div className="text-xs text-[#94A3B8]">{plan.description}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black" style={{ color: plan.popular ? '#fff' : plan.color }}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-sm text-[#94A3B8]">/{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* CTA button */}
                <a
                  href="#"
                  className={`w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-200 mb-6 ${plan.ctaStyle}`}
                  aria-label={`${plan.cta} - ${plan.name} plan`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Divider */}
                <div className="w-full h-px mb-5" style={{ background: 'rgba(255,255,255,0.06)' }} />

                {/* Feature list */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${plan.color}25` }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
                      </div>
                      <span className="text-sm text-[#CBD5E1]">{feature}</span>
                    </li>
                  ))}
                  {plan.disabled.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 opacity-35">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/5">
                        <div className="w-1.5 h-px bg-[#94A3B8]" />
                      </div>
                      <span className="text-sm text-[#475569] line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-[#475569] mt-10"
        >
          All plans include SSL encryption • GDPR compliant • Cancel anytime • No contracts
        </motion.p>
      </div>
    </section>
  );
}

