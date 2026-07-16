import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import LiveDemo from '../components/LiveDemo';
import DashboardPreview from '../components/DashboardPreview';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

export default function Home({ onGetStartedClick }) {
  return (
    <>
      <Hero onGetStartedClick={onGetStartedClick} />
      <TrustedBy />
      <LiveDemo />
      <DashboardPreview />
      <Statistics />
      <Testimonials />
      <CallToAction />
    </>
  );
}
