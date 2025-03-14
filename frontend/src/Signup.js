import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from './api';
import { motion } from 'framer-motion';
import './styles.css';
import logo from './assets/Novanest-logo.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'entrepreneur',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error message when user starts typing again
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    
    try {
      await registerUser(formData);
      
      // Success animation before redirecting
      setTimeout(() => {
        navigate('/login');
      }, 800);
    } catch (error) {
      setErrorMsg(error.toString() || 'An error occurred during registration');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-20 -left-20 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-20 -right-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute w-80 h-80 top-1/3 left-1/3 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute w-72 h-72 bottom-1/3 right-1/3 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>
      </div>

      <motion.div 
        className="relative w-full max-w-md p-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 relative overflow-hidden">
            {/* Abstract shapes in header */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>
            
            <motion.div 
              className="flex justify-center"
              variants={itemVariants}
            >
              <img 
                src={logo} 
                alt="Novanest Logo" 
                className="h-16 object-contain bg-white rounded-full p-1 shadow-xl"
              />
            </motion.div>
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-center mt-4 text-white"
              variants={itemVariants}
            >
              Join Novanest
            </motion.h2>
            <motion.p 
              className="text-sm text-center text-blue-100 mt-2 max-w-xs mx-auto"
              variants={itemVariants}
            >
              Connect with the perfect mentors, investors, and entrepreneurs to accelerate your success
            </motion.p>
          </div>

          {/* Form Section */}
          <div className="p-8">
            {errorMsg && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 text-sm rounded"
              >
                <p>{errorMsg}</p>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div className="group" variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-all group-focus-within:text-blue-600">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all"
                  />
                </div>
              </motion.div>

              <motion.div className="group" variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-all group-focus-within:text-blue-600">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all"
                  />
                </div>
              </motion.div>

              <motion.div className="group" variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-all group-focus-within:text-blue-600">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a strong password"
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 transition-all"
                  />
                </div>
              </motion.div>

              <motion.div className="group" variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-all group-focus-within:text-blue-600">I am joining as a</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <select
                    name="role"
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 appearance-none transition-all"
                  >
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="investor">Investor</option>
                    <option value="mentor">Mentor</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 active:translate-y-0'}`}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : 'Join Novanest'}
              </motion.button>
            </form>

            {/* Account Type Quick Description */}
            <motion.div 
              className="mt-8 pt-6 border-t border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-sm font-medium text-gray-700 mb-2">You're joining as:</h3>
              <div className="bg-blue-50/50 rounded-lg p-3 border border-blue-100">
                {formData.role === 'entrepreneur' && (
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-700">Entrepreneur:</span> Submit your startup, connect with mentors, and find investors who match your vision.
                  </p>
                )}
                {formData.role === 'investor' && (
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-700">Investor:</span> Discover promising startups matched to your investment criteria and track their progress.
                  </p>
                )}
                {formData.role === 'mentor' && (
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-700">Mentor:</span> Share your expertise with entrepreneurs and help shape the next generation of startups.
                  </p>
                )}
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div 
              className="mt-6 pt-5 border-t border-gray-200 text-center"
              variants={itemVariants}
            >
              <p className="text-gray-600 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="text-center mt-6"
          variants={itemVariants}
        >
          <p className="text-xs text-blue-200/80">
            © {new Date().getFullYear()} Novanest. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;