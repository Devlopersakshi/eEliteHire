import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  // States - Inhe khali rakha hai taaki auto-fill na ho
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Page load hote hi fields ko reset karne ke liye
  useEffect(() => {
    setUsername('');
    setPassword('');
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('user', username);
      navigate('/home');
    }
  };

  return (
    <div style={containerStyle}>
      {/* Soft Background Elements */}
      <div style={bgBlob1}></div>
      <div style={bgBlob2}></div>

      <div style={cardStyle}>
        {/* Logo Section */}
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div style={logoCircle}>EH</div>
          <h1 style={brandName}>ELITE<span style={{color: '#3b82f6'}}>HIRE</span></h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '5px' }}>
            Professional Job Portal Access
          </p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Username */}
          <div style={inputWrapper}>
            <label style={labelStyle}>Username</label>
            <input 
              type="text" 
              autoComplete="off"
              placeholder="Enter username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={fieldStyle}
              required
            />
          </div>

          {/* Password */}
          <div style={inputWrapper}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label style={labelStyle}>Password</label>
              <span style={textLink}>Forgot Password?</span>
            </div>
            <input 
              type="password" 
              autoComplete="new-password"
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={fieldStyle}
              required
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Login to Account
          </button>
        </form>

        {/* Register Section */}
        <div style={bottomText}>
          Don't have an account? <span style={registerLink}>Register Now</span>
        </div>
      </div>

      <p style={footerStyle}>© 2026 EliteHire • Secure Enterprise Login</p>
    </div>
  );
};

// --- MODERN STYLING OBJECTS ---
const containerStyle: React.CSSProperties = {
  height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', 
  alignItems: 'center', background: '#f0f4f8', position: 'relative', overflow: 'hidden', fontFamily: 'Inter, sans-serif'
};

const cardStyle: React.CSSProperties = {
  background: '#ffffff', padding: '45px', borderRadius: '28px', width: '100%', maxWidth: '420px',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)', zIndex: 10, border: '1px solid #e2e8f0'
};

const logoCircle: React.CSSProperties = {
  width: '55px', height: '55px', background: '#001f3f', color: '#fff', borderRadius: '14px',
  display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '22px', fontWeight: 'bold', margin: '0 auto'
};

const brandName: React.CSSProperties = { fontSize: '28px', fontWeight: '900', color: '#001f3f', margin: '15px 0 0', letterSpacing: '-1px' };

const inputWrapper: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '6px' };
const labelStyle: React.CSSProperties = { fontSize: '13px', fontWeight: '700', color: '#334155', marginLeft: '4px' };

const fieldStyle: React.CSSProperties = {
  padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #cbd5e1', 
  outline: 'none', fontSize: '15px', background: '#fcfcfc'
};

const buttonStyle: React.CSSProperties = {
  padding: '14px', background: '#001f3f', color: '#fff', border: 'none', 
  borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px',
  transition: '0.3s'
};

const textLink: React.CSSProperties = { fontSize: '12px', color: '#3b82f6', fontWeight: '600', cursor: 'pointer' };
const bottomText: React.CSSProperties = { textAlign: 'center', marginTop: '25px', fontSize: '14px', color: '#64748b' };
const registerLink: React.CSSProperties = { color: '#3b82f6', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' };

const bgBlob1: React.CSSProperties = { position: 'absolute', top: '-5%', left: '-5%', width: '350px', height: '350px', background: '#dbeafe', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.6 };
const bgBlob2: React.CSSProperties = { position: 'absolute', bottom: '-5%', right: '-5%', width: '300px', height: '300px', background: '#e0e7ff', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.6 };
const footerStyle: React.CSSProperties = { position: 'absolute', bottom: '20px', fontSize: '11px', color: '#94a3b8', letterSpacing: '1px' };

export default Login;