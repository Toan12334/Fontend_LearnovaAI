import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import LiveDemo from './components/LiveDemo';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <Dashboard onExit={() => setShowDashboard(false)} />;
  }

  if (showLogin) {
    return (
      <Login 
        onBack={() => setShowLogin(false)} 
        onLogin={() => {
          setShowLogin(false);
          setShowDashboard(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F8FAFC] overflow-x-hidden noise-overlay">
      <Navbar 
        onLoginClick={() => setShowLogin(true)} 
        onGetStartedClick={() => setShowDashboard(true)}
      />
      <main>
        <Hero onGetStartedClick={() => setShowDashboard(true)} />
        <TrustedBy />
        <LiveDemo />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <Statistics />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
