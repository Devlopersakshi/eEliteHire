import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isDark, setIsDark] = useState(false); // Screenshot ke hisab se default light rakha hai

  const allJobs = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: ["Full Stack Developer", "Cloud Engineer", "UI/UX Designer", "Data Scientist"][i % 4],
    company: ["EliteHire", "AeroTech", "Google", "InnovateX"][i % 4],
    location: ["Remote", "Bangalore", "Mumbai", "Pune"][i % 4],
    salary: "₹15L - ₹25L PA",
    workingDays: "5 Days (Mon-Fri)",
    skills: ["React", "Node.js", "MongoDB", "AWS", "Tailwind"],
    email: "hr@elitehire.com",
    description: "Hum ek energetic developer ki talash mein hain jo scalable web apps bana sake aur team ke saath collaborate kar sake.",
    posted: (i + 1) + "h ago"
  }));

  const theme = {
    bg: isDark ? '#0a0a0f' : '#f4f7fa',
    navBg: isDark ? '#11111d' : '#ffffff',
    card: isDark ? '#11111d' : '#ffffff',
    text: isDark ? '#ffffff' : '#1e293b',
    subText: isDark ? '#94a3b8' : '#64748b',
    border: isDark ? '#1f1f2e' : '#e2e8f0',
    accent: '#6366f1'
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.text, transition: '0.3s', fontFamily: 'Inter, sans-serif' }}>
      
      {/* NAVBAR */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 5%', background: theme.navBg, borderBottom: `1px solid ${theme.border}`, position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ fontSize: '20px', fontWeight: 800, color: theme.accent, display: 'flex', alignItems: 'center', gap: '8px' }}>
          ✦ ELITEHIRE
        </div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button onClick={() => setIsDark(!isDark)} style={{ padding: '8px 15px', borderRadius: '20px', border: `1px solid ${theme.accent}`, background: 'transparent', color: theme.accent, cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button onClick={() => navigate('/profile')} style={{ background: theme.accent, color: '#fff', border: 'none', padding: '8px 18px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>Profile</button>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px', fontWeight: 800 }}>Job Opportunities</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
          {allJobs.map(job => (
            <div key={job.id} 
                 style={{ background: theme.card, padding: '25px', borderRadius: '24px', border: `1px solid ${theme.border}`, transition: '0.3s', boxShadow: isDark ? 'none' : '0 10px 25px rgba(0,0,0,0.03)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span style={{ background: isDark ? '#1f1f2e' : '#f1f5f9', color: theme.accent, padding: '6px 14px', borderRadius: '10px', fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px' }}>{job.company}</span>
                <span style={{ color: theme.subText, fontSize: '11px' }}>{job.posted}</span>
              </div>

              <h3 style={{ fontSize: '22px', margin: '0 0 8px 0', fontWeight: 700 }}>{job.title}</h3>
              <p style={{ color: theme.subText, fontSize: '14px', margin: '5px 0' }}>📍 {job.location} • {job.salary}</p>
              
              <div style={{ marginTop: '15px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {job.skills.slice(0, 3).map(s => <span key={s} style={{ fontSize: '10px', background: isDark ? '#0a0a0f' : '#f8fafc', padding: '4px 10px', borderRadius: '6px', border: `1px solid ${theme.border}`, color: theme.subText }}>{s}</span>)}
              </div>

              {/* ACTION BUTTONS */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '25px' }}>
                <button 
                  onClick={() => setSelectedJob(job)}
                  style={{ flex: 1, padding: '12px', borderRadius: '12px', border: `1.5px solid ${theme.accent}`, background: 'transparent', color: theme.accent, fontWeight: 700, cursor: 'pointer', fontSize: '13px' }}>
                  View Details
                </button>
                <button 
                  onClick={() => navigate('/application-form')} // Personal/Professional Form Link
                  style={{ flex: 1, padding: '12px', borderRadius: '12px', border: 'none', background: theme.accent, color: '#fff', fontWeight: 700, cursor: 'pointer', fontSize: '13px' }}>
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL (Job Details) */}
      {selectedJob && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100, backdropFilter: 'blur(5px)' }} onClick={() => setSelectedJob(null)}>
          <div style={{ background: theme.card, width: '90%', maxWidth: '550px', borderRadius: '30px', padding: '40px', border: `1px solid ${theme.border}`, position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedJob(null)} style={{ position: 'absolute', top: '25px', right: '25px', background: 'none', border: 'none', color: theme.text, fontSize: '28px', cursor: 'pointer' }}>×</button>
            <h2 style={{ color: theme.accent, fontSize: '28px', marginBottom: '10px' }}>{selectedJob.title}</h2>
            <p style={{ fontWeight: 600, marginBottom: '25px' }}>{selectedJob.company} • {selectedJob.location}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
              <div style={{ background: isDark ? '#1a1a2e' : '#f8fafc', padding: '15px', borderRadius: '15px' }}>
                <small style={{ color: theme.subText }}>Salary</small><br/><strong>{selectedJob.salary}</strong>
              </div>
              <div style={{ background: isDark ? '#1a1a2e' : '#f8fafc', padding: '15px', borderRadius: '15px' }}>
                <small style={{ color: theme.subText }}>Shift</small><br/><strong>{selectedJob.workingDays}</strong>
              </div>
            </div>
            <h4 style={{ color: theme.accent, fontSize: '13px', textTransform: 'uppercase', marginBottom: '10px' }}>Requirements</h4>
            <p style={{ color: theme.subText, lineHeight: '1.6', fontSize: '14px' }}>{selectedJob.description}</p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {selectedJob.skills.map((s: string) => <span key={s} style={{ background: `${theme.accent}15`, color: theme.accent, padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>{s}</span>)}
            </div>
            <div style={{ background: isDark ? '#0a0a0f' : '#f1f5f9', padding: '20px', borderRadius: '15px', marginTop: '25px' }}>
              <p style={{ margin: 0, fontSize: '14px' }}>📧 Contact HR: <b>{selectedJob.email}</b></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;