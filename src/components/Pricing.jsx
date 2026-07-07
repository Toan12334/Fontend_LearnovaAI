import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for students and occasional use',
    color: '#94A3B8',
    gradient: 'from-[#94A3B8]/10 to-transparent',
    border: 'rgba(148,163,184,0.2)',
    icon: Shield,
    features: [
      '5 checks per month',
      'Up to 5,000 words per check',
      'Basic similarity detection',
      'Email report',
      'Standard processing speed',
      '3 languages supported',
    ],
    disabled: ['AI generation detection', 'PDF export', 'API access', 'Priority support'],
    cta: 'Get Started Free',
    ctaStyle: 'border border-white/20 hover:border-white/40 hover:bg-white/5',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$19',
    period: 'per month',
    description: 'Best for researchers and professionals',
    color: '#4F7CFF',
    gradient: 'from-[#4F7CFF]/15 to-[#8B5CF6]/10',
    border: 'rgba(79,124,255,0.5)',
    icon: Zap,
    features: [
      'Unlimited checks',
      'Up to 100,000 words per check',
      'AI semantic analysis',
      'AI generation detection (GPT, Claude, Gemini)',
      'PDF + DOCX export',
      '50+ languages',
      'Source URL identification',
      'Priority processing (< 3s)',
      'Email support',
    ],
    disabled: ['API access', 'Team management'],
    cta: 'Start Premium',
    ctaStyle: 'btn-gradient',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per organization',
    description: 'For institutions and large teams',
    color: '#8B5CF6',
    gradient: 'from-[#8B5CF6]/10 to-transparent',
    border: 'rgba(139,92,246,0.3)',
    icon: Star,
    features: [
      'Everything in Premium',
      'Full API access',
      'Unlimited team members',
      'Custom integrations (LMS, CMS)',
      'White-label reports',
      'Dedicated account manager',
      'SLA 99.9% uptime guarantee',
      'GDPR & FERPA compliant',
      'SSO / SAML support',
    ],
    disabled: [],
    cta: 'Contact Sales',
    ctaStyle: 'border border-[#8B5CF6]/50 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10',
    popular: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');

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
            <span className="text-xs font-semibold text-[#94A3B8]">Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Plans for <span className="gradient-text">Every Need</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">
            Start free, scale as you grow. No hidden fees. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl" style={{ background: '#151C2F', border: '1px solid rgba(255,255,255,0.08)' }}>
            {['monthly', 'annual'].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-5 py-2 text-sm font-semibold rounded-lg capitalize transition-all duration-200 ${
                  billing === b
                    ? 'text-white btn-gradient shadow-md'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                {b}
                {b === 'annual' && (
                  <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-[#22C55E]/20 text-[#22C55E] rounded-full">-20%</span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const displayPrice = billing === 'annual' && plan.price !== '$0' && plan.price !== 'Custom'
              ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
              : plan.price;

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
                    <span className="px-4 py-1 text-xs font-bold text-white rounded-full btn-gradient shadow-lg">
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
                      {displayPrice}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-sm text-[#94A3B8]">/{plan.period}</span>
                    )}
                  </div>
                  {billing === 'annual' && plan.price !== '$0' && plan.price !== 'Custom' && (
                    <p className="text-xs text-[#22C55E] mt-1">Save 20% with annual billing</p>
                  )}
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
