import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';

function Layout() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F8FAFC] overflow-x-hidden noise-overlay flex flex-col">
      <Navbar 
        onLoginClick={() => navigate('/login')} 
        onGetStartedClick={() => navigate('/dashboard')}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home onGetStartedClick={() => navigate('/dashboard')} />} />
        <Route path="features" element={<Features />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
      <Route 
        path="/login" 
        element={
          <Login 
            onBack={() => navigate('/')} 
            onLogin={() => navigate('/dashboard')}
          />
        } 
      />
      <Route 
        path="/dashboard" 
        element={<Dashboard onExit={() => navigate('/')} />} 
      />
    </Routes>
  );
}
