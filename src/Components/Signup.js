import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer'); 

  const handleSignup = async () => {
    try {

      if (!email || !password) {
        toast.error('Email and password are required!');
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);

      console.log(`${role} Signup successful!`);

      toast.success(`${role} Signup successful!`);

   
    } catch (error) {
     
      console.error(`${role} Signup error:`, error.message);

      toast.error(`${role} Signup error: ${error.message}`);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center">
        <h1>Signup</h1>
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

        {role === 'customer' && (
          <form className="text-center">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="button" className="btn btn-primary mt-3" onClick={handleSignup}>
              Signup as Customer
            </button>
          </form>
        )}

        {role === 'owner' && (
          <form className="text-center">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="button" className="btn btn-primary mt-3" onClick={handleSignup}>
              Signup as Owner
            </button>
          </form>
        )}

        <p className="mt-3">
          Already have an account?{' '}
          <Link to={role === 'customer' ? '/CustomerLogin' : '/OwnerLogin'}>Login here</Link>.
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
