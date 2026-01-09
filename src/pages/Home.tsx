import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [viewAll, setViewAll] = useState(false);
  const [query, setQuery] = useState('');

  // 1. User Profile base skills (Isi ke base par jobs filter hongi)
  const userProfile = {
    name: "Sakshi Rathod",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "Full Stack"], // In skills ko change karne par jobs badal jayengi
  };

  // 2. 100 Jobs Database with Skills requirement
  const allJobs = Array.from({ length: 100 }, (_, i) => {
    const roles = ["Full Stack Developer", "Frontend Engineer", "Backend Intern", "UI/UX Designer", "DevOps Engineer", "Python Developer"];
    const role = roles[i % roles.length];
    
    // Har job ki apni required skills hain
    const jobSkills = [
      ["React", "Node.js", "Full Stack"],
      ["React", "JavaScript", "Tailwind"],
      ["Node.js", "Express", "MongoDB"],
      ["Figma", "UI/UX", "CSS"],
      ["Docker", "AWS", "Kubernetes"],
      ["Python", "Django", "SQL"]
    ][i % 6];

    return {
      id: i + 1,
      title: role,
      company: ["EliteHire", "Google", "Amazon", "Wpgenius", "TCS", "Microsoft"][i % 6],
      location: ["Remote", "Pune", "Bangalore", "Mumbai"][i % 4],
      salary: "₹12-18 LPA",
      vacancies: 10,
      hired: 3,
      posted: (i % 7) + "d ago",
      requiredSkills: jobSkills
    };
  });

  // 3. --- DYNAMIC RECOMMENDATION LOGIC ---
  // Ye logic check karta hai ki kya user ki koi bhi skill job ki requirement se match karti hai
  const recommendedJobs = allJobs.filter(job => 
    job.requiredSkills.some(skill => userProfile.skills.includes(skill))
  );

  const displayJobs = viewAll ? allJobs : recommendedJobs;

  const handleQuerySubmit = () => {
    if(query.trim()) {
      alert("Your query has been submitted!");
      setQuery('');
    }
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* NAVBAR */}
      <nav style={navStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div onClick={() => navigate('/home')} style={{ fontSize: '24px', fontWeight: '800', color: '#1a73e8', cursor: 'pointer' }}>ELITE<span style={{color:'#1e293b'}}>HIRE</span></div>
          <div style={{ display: 'flex', gap: '25px', fontSize: '14px', color: '#64748b', fontWeight: '600' }}>
            <span onClick={() => navigate('/prepare')} style={{cursor:'pointer'}}>Prepare</span>
            <span onClick={() => navigate('/opportunities')} style={{cursor:'pointer'}}>Opportunities</span>
          </div>
        </div>
        <div onClick={() => navigate('/profile')} style={profileTrigger}>
          <div style={avatar}>S</div>
          <span style={{ fontWeight: '600' }}>{userProfile.name}</span>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* HEADER SECTION */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '30px' }}>
          <div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1e293b' }}>
              {viewAll ? "All Available Jobs" : "Jobs Recommended for your Skills"}
            </h2>
            <p style={{color: '#64748b', fontSize: '14px'}}>
              {viewAll ? `Showing all ${allJobs.length} jobs` : `Showing ${recommendedJobs.length} jobs matching: ${userProfile.skills.join(', ')}`}
            </p>
          </div>
          <button onClick={() => setViewAll(!viewAll)} style={toggleBtn}>
            {viewAll ? "Back to Recommendations" : `View All ${allJobs.length} Jobs`}
          </button>
        </div>

        {/* JOB GRID */}
        <div style={jobGrid}>
          {displayJobs.map((job) => (
            <div key={job.id} style={jobCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={logoBox}>{job.company[0]}</div>
                <span style={{fontSize:'12px', color:'#94a3b8'}}>{job.posted}</span>
              </div>
              <h3 style={{margin:'15px 0 5px', fontSize:'18px'}}>{job.title}</h3>
              <p style={{color:'#64748b', fontSize:'14px', marginBottom:'10px'}}>{job.company} • {job.location}</p>
              
              {/* Job Required Skills Badges */}
              <div style={{display:'flex', gap:'5px', flexWrap:'wrap', marginBottom:'15px'}}>
                {job.requiredSkills.map(skill => (
                  <span key={skill} style={skillBadge}>{skill}</span>
                ))}
              </div>

              <div style={statsRow}>
                <small>Vacancies: <b>{job.vacancies}</b></small>
                <small>Hired: <b style={{color:'#16a34a'}}>{job.hired}</b></small>
              </div>

              <button onClick={() => navigate('/apply')} style={applyBtn}>Apply Now</button>
            </div>
          ))}
        </div>

        {/* REVIEWS & QUERIES SECTION */}
        <div style={querySection}>
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#1e293b', marginBottom: '10px' }}>Have any Questions?</h3>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Contact support for more info:</p>
            <p style={{ fontSize: '14px', color: '#64748b' }}>📞 +91 800-456-7890 | ✉️ help@elitehire.com</p>
          </div>
          <div style={{ flex: 1, background: '#fff', padding: '25px', borderRadius: '20px' }}>
            <textarea 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question about these jobs..." 
              style={textAreaStyle}
            />
            <button onClick={handleQuerySubmit} style={submitBtn}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- STYLES ---
const navStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', padding: '15px 60px', background: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100 };
const profileTrigger: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' };
const avatar: React.CSSProperties = { width: '35px', height: '35px', borderRadius: '50%', background: '#1a73e8', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' };
const jobGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' };
const jobCard: React.CSSProperties = { background: '#fff', padding: '20px', borderRadius: '20px', border: '1px solid #eef2f6', display: 'flex', flexDirection: 'column' };
const logoBox: React.CSSProperties = { width: '40px', height: '40px', background: '#f0f7ff', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1a73e8', fontWeight: 'bold' };
const skillBadge: React.CSSProperties = { fontSize: '10px', background: '#f1f5f9', padding: '3px 8px', borderRadius: '5px', color: '#475569' };
const statsRow: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#f8fafc', borderRadius: '10px', marginBottom: '15px', marginTop:'auto' };
const toggleBtn: React.CSSProperties = { padding: '10px 20px', borderRadius: '10px', border: '2px solid #1a73e8', background: 'transparent', color: '#1a73e8', fontWeight: 'bold', cursor: 'pointer' };
const applyBtn: React.CSSProperties = { width: '100%', padding: '12px', background: '#001f3f', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };
const querySection: React.CSSProperties = { marginTop: '80px', padding: '40px', background: '#eef2f6', borderRadius: '30px', display: 'flex', gap: '40px', alignItems: 'center' };
const textAreaStyle: React.CSSProperties = { width: '100%', height: '80px', padding: '15px', borderRadius: '12px', border: '1px solid #e2e8f0', fontFamily: 'inherit', resize: 'none', marginBottom: '10px', boxSizing: 'border-box' };
const submitBtn: React.CSSProperties = { background: '#1a73e8', color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', width: '100%' };

export default Home;