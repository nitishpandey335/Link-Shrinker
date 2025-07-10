// src/pages/SignUp.tsx
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registration successful');
      navigate('/signin'); // 👈 Redirect to SignIn after successful signup
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit">Register</button> {/* 👈 Make sure this is "submit" */}
    </form>
  );
}

export default SignUp;
