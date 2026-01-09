import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // States
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [skills, setSkills] = useState<string[]>(["React", "Node.js", "TypeScript", "UI/UX"]);
  const [newSkill, setNewSkill] = useState<string>("");
  const [activeTab, setActiveTab] = useState<'Overview' | 'Applications'>('Overview');

  const appliedJobs = [
    { id: 1, title: "Full Stack Engineer", company: "EliteHire", status: "Active", date: "Jan 05" },
    { id: 2, title: "Product Designer", company: "AeroTech", status: "Closed", date: "Dec 28" }
  ];

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  return (
    <div style={styles.container}>
      {/* GLASSNAV */}
      <nav style={styles.nav}>
        <div onClick={() => navigate('/home')} style={styles.logo}>
          <span style={{color: '#6366f1'}}>✦</span> ELITE<span style={{fontWeight: 300}}>HIRE</span>
        </div>
        <button onClick={() => navigate('/home')} style={styles.backBtn}>Dashboard</button>
      </nav>

      <div style={styles.contentWrapper}>
        {/* HERO SECTION */}
        <header style={styles.heroCard}>
          <div style={styles.heroFlex}>
            <div style={styles.avatarContainer} onClick={() => fileInputRef.current?.click()}>
              <div style={{...styles.avatarCircle, backgroundImage: profileImage ? `url(${profileImage})` : 'none'}}>
                {!profileImage && "SR"}
              </div>
              <input type="file" ref={fileInputRef} onChange={handlePhotoUpload} style={{display:'none'}} accept="image/*" />
            </div>
            
            <div style={styles.userInfo}>
              <h1 style={styles.userName}>Sakshi Rathod</h1>
              <p style={styles.userSub}>Full Stack Developer • Sipna College</p>
              <div style={styles.badges}>
                <span style={styles.badge}>📍 Amravati</span>
                <span style={styles.badge}>✉️ sakshi@email.com</span>
              </div>
            </div>
          </div>
        </header>

        {/* TABS */}
        <div style={styles.tabBar}>
          <button 
            onClick={() => setActiveTab('Overview')} 
            style={activeTab === 'Overview' ? styles.activeTab : styles.inactiveTab}
          >Overview</button>
          <button 
            onClick={() => setActiveTab('Applications')} 
            style={activeTab === 'Applications' ? styles.activeTab : styles.inactiveTab}
          >Applied Jobs</button>
        </div>

        {/* DYNAMIC CONTENT */}
        <div style={styles.mainGrid}>
          {activeTab === 'Overview' ? (
            <>
              <section style={styles.card}>
                <h3 style={styles.cardTitle}>Tech Stack</h3>
                <div style={styles.skillCloud}>
                  {skills.map(s => (
                    <div key={s} style={styles.skillTag}>
                      {s} <span onClick={() => setSkills(skills.filter(x => x !== s))} style={{marginLeft: 8, cursor:'pointer', opacity: 0.6}}>×</span>
                    </div>
                  ))}
                </div>
                <div style={styles.inputGroup}>
                  <input 
                    style={styles.input} 
                    placeholder="Add skill..." 
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <button onClick={handleAddSkill} style={styles.addBtn}>+</button>
                </div>
              </section>

              <section style={styles.card}>
                <h3 style={styles.cardTitle}>Bio</h3>
                <p style={styles.text}>Building digital products with modern technologies. Focused on creating clean, responsive user interfaces.</p>
              </section>
            </>
          ) : (
            <section style={{...styles.card, width: '100%'}}>
              <h3 style={styles.cardTitle}>Application History</h3>
              {appliedJobs.map(job => (
                <div key={job.id} style={styles.jobItem}>
                  <div>
                    <div style={{fontWeight: 600}}>{job.title}</div>
                    <div style={{fontSize: 12, color: '#94a3b8'}}>{job.company} • {job.date}</div>
                  </div>
                  <span style={job.status === 'Active' ? styles.statusActive : styles.statusClosed}>{job.status}</span>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

// --- STYLES OBJECT (Mobile Responsive) ---
const styles: { [key: string]: React.CSSProperties } = {
  container: { background: '#0a0a0f', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif' },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', borderBottom: '1px solid #1f1f2e', background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 10 },
  logo: { fontSize: '20px', fontWeight: 800, cursor: 'pointer', letterSpacing: '1px' },
  backBtn: { padding: '8px 16px', background: '#1f1f2e', border: '1px solid #333', borderRadius: '8px', color: '#fff', cursor: 'pointer' },
  contentWrapper: { maxWidth: '1000px', margin: '0 auto', padding: '20px' },
  heroCard: { background: 'linear-gradient(135deg, #161625 0%, #0a0a0f 100%)', padding: '30px', borderRadius: '24px', border: '1px solid #222', marginBottom: '25px' },
  heroFlex: { display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' },
  avatarCircle: { width: '90px', height: '90px', borderRadius: '24px', background: '#222', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', border: '2px solid #6366f1' },
  userName: { margin: 0, fontSize: '28px', fontWeight: 800 },
  userSub: { color: '#94a3b8', margin: '5px 0' },
  badges: { display: 'flex', gap: '15px', flexWrap: 'wrap' },
  badge: { fontSize: '13px', color: '#6366f1' },
  tabBar: { display: 'flex', gap: '10px', marginBottom: '25px', borderBottom: '1px solid #1f1f2e' },
  activeTab: { padding: '12px 20px', background: 'none', border: 'none', borderBottom: '2px solid #6366f1', color: '#6366f1', fontWeight: 700, cursor: 'pointer' },
  inactiveTab: { padding: '12px 20px', background: 'none', border: 'none', color: '#666', cursor: 'pointer' },
  mainGrid: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
  card: { background: '#11111d', padding: '24px', borderRadius: '20px', border: '1px solid #1f1f2e', flex: '1 1 300px' },
  cardTitle: { margin: '0 0 20px 0', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: '#6366f1' },
  skillCloud: { display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' },
  skillTag: { background: '#1f1f2e', padding: '6px 14px', borderRadius: '10px', fontSize: '13px' },
  inputGroup: { display: 'flex', gap: '10px' },
  input: { flex: 1, background: '#0a0a0f', border: '1px solid #333', padding: '10px', borderRadius: '8px', color: '#fff' },
  addBtn: { background: '#6366f1', border: 'none', color: '#fff', width: '40px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' },
  jobItem: { display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #1f1f2e' },
  statusActive: { color: '#4ade80', fontSize: '12px', fontWeight: 700 },
  statusClosed: { color: '#666', fontSize: '12px' },
  text: { color: '#94a3b8', lineHeight: 1.6 }
};

export default Profile;