
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Apple, Mail, ArrowRight, Eye, EyeOff } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleView = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{isLogin ? 'Welcome Back' : 'Create an Account'}</h1>
              <p className="text-muted-foreground">
                {isLogin 
                  ? 'Sign in to continue to your account' 
                  : 'Join the NS School community'
                }
              </p>
            </div>
            
            <div className="glass rounded-xl p-8 shadow-sm">
              <form className="space-y-6">
                {!isLogin && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-12 px-4 rounded-lg border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="w-full h-12 px-4 pr-10 rounded-lg border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder={isLogin ? "Enter your password" : "Create a strong password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                {!isLogin && (
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-1">
                      Role at NS School
                    </label>
                    <select
                      id="role"
                      className="w-full h-12 px-4 rounded-lg border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="" disabled selected>Select your role</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="parent">Parent</option>
                      <option value="admin">Administrator</option>
                      <option value="staff">Staff</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}
                
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-border"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}
                
                <button type="submit" className="button-primary w-full">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </button>
                
                <div className="relative flex items-center justify-center">
                  <div className="border-t border-border absolute w-full"></div>
                  <span className="relative px-4 bg-background text-sm text-muted-foreground">or continue with</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="bg-black text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                  >
                    <Apple size={18} />
                    <span>Apple</span>
                  </button>
                  <button
                    type="button"
                    className="bg-white border border-border text-foreground px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-muted transition-colors"
                  >
                    <Mail size={18} />
                    <span>Google</span>
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    type="button"
                    onClick={toggleView}
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                    <ArrowRight size={14} className="ml-1" />
                  </button>
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>By continuing, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
