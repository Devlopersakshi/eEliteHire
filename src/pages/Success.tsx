import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#f8fafc', textAlign: 'center' }}>
      <div style={{ fontSize: '100px', marginBottom: '20px' }}>✅</div>
      <h1 style={{ color: '#1e293b' }}>Application Submitted to EliteHire Recruiters!</h1>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>Your profile performance has been updated in the dashboard.</p>
      <button onClick={() => navigate('/home')} style={{ padding: '12px 40px', background: '#1a73e8', color: 'white', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer' }}>Back to Dashboard</button>
    </div>
  );
};
export default Success;