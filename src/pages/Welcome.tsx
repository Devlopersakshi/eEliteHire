import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', width: '100vw', background: 'linear-gradient(180deg, #00122e 0%, #000000 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center' }}>
      <div style={{ marginBottom: '30px', animation: 'float 4s ease-in-out infinite' }}>
        <span style={{ fontSize: '100px' }}>🎓</span>
      </div>
      <h1 style={{ fontSize: 'clamp(40px, 8vw, 85px)', fontWeight: '900', margin: '0', letterSpacing: '-3px' }}>
        ELITE<span style={{ color: '#3b82f6' }}>HIRE</span>
      </h1>
      <p style={{ fontSize: '22px', marginTop: '15px', opacity: '0.8' }}>
        Your journey to <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>your dream job</span> starts here.
      </p>
      <button onClick={() => navigate('/login')} style={{ marginTop: '50px', padding: '18px 60px', fontSize: '20px', borderRadius: '12px', border: 'none', background: '#3b82f6', color: 'white', fontWeight: '700', cursor: 'pointer', boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)' }}>
        Get Started
      </button>
      <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }`}</style>
    </div>
  );
};
export default Welcome;