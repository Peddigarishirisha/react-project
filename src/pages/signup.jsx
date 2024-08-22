import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { UserAuth } from '../context/Authcontext';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name) return 'Name is required.';
    if (!email) return 'Email is required.';
    if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid.';
    if (!password) return 'Password is required.';
    if (password.length < 6) return 'Password must be at least 6 characters long.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError('');
    setIsLoading(true); // Set loading state

    try {
      await signUp(email, password); // Ensure `signUp` function matches these parameters
      navigate('/');
    } catch (error) {
      setError(error.message || 'Failed to create account.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='Background'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            {error && <p className='p-3 bg-red-400 my-2'>{error}</p>}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className='p-3 my-3 bg-gray-700 rounded' 
                type="text" 
                placeholder='Name' 
                autoComplete='name'
              />
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className='p-3 my-3 bg-gray-700 rounded' 
                type="email" 
                placeholder='Email' 
                autoComplete='email'
              />
              <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                className='p-3 my-3 bg-gray-700 rounded'  
                type="password" 
                placeholder='Password' 
                autoComplete='current-password'
              />
              <button 
                type="submit" 
                className='bg-red-600 py-3 my-6 rounded font-bold'
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? 'Signing Up...' : 'Sign Up'}
              </button>
              <div className='flex justify-between text-sm text-gray-600'>
                <p> 
                  <input className="mr-2" type="checkbox" />Remember me
                </p> 
                <p>Need Help?</p> 
              </div>
              <p className='py-8'>
                <span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}
                <Link to='/login'>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
