
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Apple, Mail, ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { useToast } from '@/hooks/use-toast';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const toggleView = () => {
    setIsLogin(!isLogin);
    // Reset form data when switching views
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success toast
      toast({
        title: isLogin ? "Welcome back!" : "Account created successfully!",
        description: isLogin 
          ? "You've been successfully logged in." 
          : "Your NS School account has been created.",
        variant: "default",
      });
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // Simulate Google authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Google authentication successful",
        description: "You've been logged in with Google.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Google authentication failed",
        description: "There was a problem signing in with Google.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    setIsLoading(true);
    try {
      // Simulate Apple authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Apple authentication successful",
        description: "You've been logged in with Apple.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Apple authentication failed",
        description: "There was a problem signing in with Apple.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
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
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
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
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {!isLogin && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Password must be at least 8 characters long
                    </p>
                  )}
                </div>
                
                {!isLogin && (
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-1">
                      Role at NS School
                    </label>
                    <select
                      id="role"
                      className="w-full h-12 px-4 rounded-lg border border-border bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>Select your role</option>
                      <option value="student">Student</option>
                      <option value="teacher">Teacher</option>
                      <option value="parent">Parent</option>
                      <option value="admin">Administrator</option>
                      <option value="staff">Staff</option>
                      <option value="investor">Investor</option>
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
                
                <button 
                  type="submit" 
                  className="button-primary w-full flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      {isLogin ? 'Signing In...' : 'Creating Account...'}
                    </>
                  ) : (
                    isLogin ? 'Sign In' : 'Create Account'
                  )}
                </button>
                
                <div className="relative flex items-center justify-center">
                  <div className="border-t border-border absolute w-full"></div>
                  <span className="relative px-4 bg-background text-sm text-muted-foreground">or continue with</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={handleAppleSignIn}
                    disabled={isLoading}
                    className="bg-black text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-70"
                  >
                    {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Apple size={18} />}
                    <span>Apple</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    className="bg-white border border-border text-foreground px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-muted transition-colors disabled:opacity-70"
                  >
                    {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Mail size={18} />}
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
                    disabled={isLoading}
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
