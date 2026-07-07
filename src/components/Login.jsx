import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Apple } from 'lucide-react';

export default function Login({ onBack, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F8FAFC] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden noise-overlay">
      {/* Background Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {onBack && (
            <button
              onClick={onBack}
              className="absolute left-0 top-2 text-slate-400 hover:text-white transition-colors"
            >
              ← Back
            </button>
          )}
          <h2 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to your account to continue
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
      >
        <div className="bg-[#111827]/60 backdrop-blur-xl py-8 px-4 shadow-[0_0_40px_rgba(0,0,0,0.5)] sm:rounded-2xl sm:px-10 border border-white/10 relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

          <form 
            className="space-y-6 relative z-10" 
            onSubmit={(e) => { e.preventDefault(); onLogin?.(); }}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 bg-slate-900/50 border border-slate-700 rounded-xl py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500" aria-hidden="true" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 bg-slate-900/50 border border-slate-700 rounded-xl py-2.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 bg-slate-900 border-slate-700 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Sign in
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="mt-8 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#111827] text-slate-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); onLogin?.(); }}
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-slate-700 rounded-xl shadow-sm bg-slate-800/50 text-sm font-medium text-slate-300 hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>

              <button
                type="button"
                onClick={(e) => { e.preventDefault(); onLogin?.(); }}
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-slate-700 rounded-xl shadow-sm bg-slate-800/50 text-sm font-medium text-slate-300 hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all hover:-translate-y-0.5"
              >
                <Apple className="w-5 h-5 mr-2 text-white" />
                Apple
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-400 relative z-10">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
              Sign up free
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
