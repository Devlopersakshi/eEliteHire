import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '40px 20px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <h2 style={{ textAlign: 'center', color: '#1a73e8', marginBottom: '10px' }}>Job Application Form</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '30px' }}>Please provide your details to apply for this position.</p>

        <form onSubmit={handleSubmit}>
          {/* PERSONAL DETAILS */}
          <h3 style={sectionTitle}>1. Personal Details</h3>
          <div style={gridRow}>
            <div style={inputGroup}>
              <label style={labelStyle}>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                required 
                style={inputStyle} 
              />
            </div>
            <div style={inputGroup}>
              <label style={labelStyle}>Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                style={inputStyle} 
              />
            </div>
          </div>
          <div style={inputGroup}>
            <label style={labelStyle}>Phone Number</label>
            <input 
              type="tel" 
              placeholder="Enter mobile no." 
              required 
              style={inputStyle} 
            />
          </div>

          {/* PROFESSIONAL DETAILS */}
          <h3 style={{ ...sectionTitle, marginTop: '30px' }}>2. Professional Details</h3>
          <div style={inputGroup}>
            <label style={labelStyle}>Highest Qualification</label>
            <input 
              type="text" 
              placeholder="Enter your highest qualification (e.g. B.Tech)" 
              required 
              style={inputStyle} 
            />
          </div>
          <div style={inputGroup}>
            <label style={labelStyle}>Key Skills</label>
            <input 
              type="text" 
              placeholder="Enter your skills (e.g. React, Node.js)" 
              required 
              style={inputStyle} 
            />
          </div>
          
          <div style={inputGroup}>
            <label style={labelStyle}>Resume Link (Drive/GitHub)</label>
            <input 
              type="url" 
              placeholder="Enter your resume link" 
              required 
              style={inputStyle} 
            />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginTop: '40px' }}>
            <button type="submit" style={submitBtn}>Submit Application</button>
            <button type="button" onClick={() => navigate('/home')} style={cancelBtn}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- STYLES ---
const sectionTitle = { fontSize: '18px', fontWeight: '700', color: '#1e293b', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px', marginBottom: '20px' };
const gridRow = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const inputGroup = { marginBottom: '20px' };
const labelStyle = { display: 'block', fontSize: '14px', fontWeight: '600', color: '#64748b', marginBottom: '8px' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '15px', outline: 'none', boxSizing: 'border-box' as const };
const submitBtn = { flex: 2, padding: '15px', background: '#1a73e8', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' };
const cancelBtn = { flex: 1, padding: '15px', background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' };

export default ApplicationForm;