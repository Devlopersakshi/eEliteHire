import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // States
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [skills, setSkills] = useState(["React", "Node.js", "MongoDB", "TypeScript"]);
  const [newSkill, setNewSkill] = useState("");
  const [activeTab, setActiveTab] = useState('View & Edit');

  // Dummy Data for Applied Jobs
  const appliedJobs = [
    { id: 1, title: "Full Stack Developer", company: "EliteHire", status: "Under Review", date: "Jan 5, 2026" },
    { id: 2, title: "Frontend Intern", company: "Google", status: "Shortlisted", date: "Jan 2, 2026" }
  ];

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* NAVBAR */}
      <nav style={navStyle}>
        <div onClick={() => navigate('/home')} style={{ fontSize: '24px', fontWeight: '800', color: '#1a73e8', cursor: 'pointer' }}>
          ELITE<span style={{color:'#1e293b'}}>HIRE</span>
        </div>
        <button onClick={() => navigate('/home')} style={backBtn}>Back to Dashboard</button>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '30px auto', padding: '0 20px' }}>
        
        {/* PROFILE HEADER */}
        <div style={profileCard}>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <div style={avatarWrapper} onClick={() => fileInputRef.current?.click()}>
               <div style={{...avatarCircle, backgroundImage: `url(${profileImage})`, backgroundSize: 'cover'}}>
                 {!profileImage && <span style={{fontSize: '40px', color: '#cbd5e1'}}>+</span>}
               </div>
               <input type="file" ref={fileInputRef} onChange={handlePhotoUpload} style={{display:'none'}} accept="image/*" />
               <span style={addPhotoText}>Update Photo</span>
            </div>
            <div style={{ flex: 1 }}>
              <h1 style={{ margin: 0, fontSize: '28px' }}>SAKSHI RATHOD</h1>
              <p style={{ color: '#64748b' }}>B.Tech/B.E. Computers • Sipna College of Engineering</p>
              <div style={contactRow}>
                <span>📍 Amravati</span>
                <span>📞 +91 93073 96265</span>
                <span>✉️ sakshi@email.com</span>
              </div>
            </div>
            <div style={completionBadge}>Profile Strength: 85%</div>
          </div>
        </div>

        {/* TABS FOR APPLIED JOBS & EDIT */}
        <div style={tabContainer}>
          <span onClick={() => setActiveTab('View & Edit')} style={activeTab === 'View & Edit' ? activeTabStyle : tabStyle}>Personal Info & Skills</span>
          <span onClick={() => setActiveTab('Applied Jobs')} style={activeTab === 'Applied Jobs' ? activeTabStyle : tabStyle}>Applied Jobs ({appliedJobs.length})</span>
        </div>

        <div style={{ marginTop: '30px' }}>
          {activeTab === 'View & Edit' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              
              {/* SKILLS SECTION */}
              <div style={whiteCard}>
                <h4 style={{marginBottom:'15px'}}>Technical Skills</h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {skills.map(skill => (
                    <span key={skill} style={skillTag}>
                      {skill} <span onClick={() => removeSkill(skill)} style={{marginLeft:'8px', cursor:'pointer', color:'#ef4444'}}>×</span>
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={newSkill} 
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add new skill (e.g. Java)" 
                    style={inputStyle}
                  />
                  <button onClick={addSkill} style={addBtn}>Add</button>
                </div>
              </div>

              {/* ABOUT SECTION */}
              <div style={whiteCard}>
                <h4 style={{marginBottom:'15px'}}>About Me</h4>
                <p style={{color:'#64748b', fontSize:'14px', lineHeight:'1.6'}}>
                  Aspiring Full Stack Developer with a passion for building scalable web applications. 
                  Experienced in MERN stack and currently exploring Cloud Technologies.
                </p>
              </div>
            </div>
          ) : (
            /* APPLIED JOBS SECTION */
            <div style={whiteCard}>
              <h4 style={{marginBottom:'20px'}}>Your Applications</h4>
              {appliedJobs.map(job => (
                <div key={job.id} style={jobListItem}>
                  <div>
                    <strong style={{fontSize:'16px'}}>{job.title}</strong>
                    <p style={{margin:0, color:'#64748b', fontSize:'13px'}}>{job.company} • Applied on {job.date}</p>
                  </div>
                  <span style={{...statusBadge, background: job.status === 'Shortlisted' ? '#ecfdf5' : '#fff7ed', color: job.status === 'Shortlisted' ? '#059669' : '#d97706'}}>
                    {job.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

// --- STYLES ---
const navStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', padding: '15px 60px', background: '#fff', borderBottom: '1px solid #e2e8f0' };
const backBtn: React.CSSProperties = { padding: '8px 18px', background: '#001f3f', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' };

const profileCard: React.CSSProperties = { background: '#fff', padding: '30px', borderRadius: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' };
const avatarWrapper: React.CSSProperties = { textAlign: 'center', cursor: 'pointer' };
const avatarCircle: React.CSSProperties = { width: '100px', height: '100px', borderRadius: '50%', border: '3px solid #1a73e8', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundPosition:'center' };
const addPhotoText: React.CSSProperties = { fontSize: '11px', color: '#1a73e8', fontWeight: 'bold', marginTop: '8px', display: 'block' };
const contactRow: React.CSSProperties = { display: 'flex', gap: '20px', fontSize: '13px', color: '#64748b', marginTop: '10px' };
const completionBadge: React.CSSProperties = { background: '#f0f9ff', color: '#0369a1', padding: '10px 15px', borderRadius: '12px', fontWeight: 'bold', fontSize: '12px' };

const tabContainer: React.CSSProperties = { marginTop: '40px', borderBottom: '2px solid #e2e8f0', display: 'flex', gap: '30px' };
const tabStyle: React.CSSProperties = { paddingBottom: '12px', cursor: 'pointer', color: '#64748b', fontWeight: '600' };
const activeTabStyle: React.CSSProperties = { ...tabStyle, color: '#1a73e8', borderBottom: '3px solid #1a73e8' };

const whiteCard: React.CSSProperties = { background: '#fff', padding: '25px', borderRadius: '20px', border: '1px solid #eef2f6' };
const skillTag: React.CSSProperties = { background: '#f1f5f9', padding: '6px 15px', borderRadius: '50px', fontSize: '14px', fontWeight: '500', color: '#475569' };
const inputStyle: React.CSSProperties = { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' };
const addBtn: React.CSSProperties = { background: '#1a73e8', color: '#fff', border: 'none', padding: '0 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' };

const jobListItem: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #f1f5f9' };
const statusBadge: React.CSSProperties = { padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' };

export default Profile;