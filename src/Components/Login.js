import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); 
  const handleLogin = async () => {
    try {
     
      if (!email || !password) {
        toast.error('Email and password are required!');
        return;
      }

      await signInWithEmailAndPassword(auth, email, password);

   
      console.log(`${role} Login successful!`);

     
      toast.success(`${role} Login successful!`);

     
    } catch (error) {
     
      console.error(`${role} Login error:`, error.message);

    
      toast.error(`${role} Login error: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center">
        <h1>Login</h1>
        <div className="d-flex mb-3">
          <button
            type="button"
            className={`btn ${role === 'customer' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setRole('customer')}
          >
            Customer
          </button>
          <button
            type="button"
            className={`btn ${role === 'owner' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setRole('owner')}
          >
            Owner
          </button>
        </div>

        <form className="text-center">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="button" className="btn btn-primary mt-3" onClick={handleLogin}>
            Login
          </button>
        </form>

        <p className="mt-3">
          Don't have an account?{' '}
          <Link to={role === 'customer' ? '/CustomerSignup' : '/OwnerSignup'}>Signup here</Link>.
        </p>

      
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
