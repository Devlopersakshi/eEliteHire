import { useNavigate } from 'react-router-dom';

const Prepare = () => {
  const navigate = useNavigate();

  // Useful Learning Links for Students
  const learningLinks = [
    { name: "FreeCodeCamp (Full Course)", url: "https://www.youtube.com/c/FreeCodeCamp", platform: "YouTube" },
    { name: "MDN Web Docs (Best for JS/HTML)", url: "https://developer.mozilla.org/", platform: "Documentation" },
    { name: "LeetCode (Coding Practice)", url: "https://leetcode.com/", platform: "Practice" },
    { name: "CodeWithHarry (Hindi Tutorials)", url: "https://www.youtube.com/@CodeWithHarry", platform: "YouTube" },
    { name: "Roadmap.sh (Learning Paths)", url: "https://roadmap.sh/", platform: "Career Guide" }
  ];

  // 15+ Categorized Interview Questions
  const questions = [
    { q: "Tell me about yourself?", type: "HR", level: "Basic" },
    { q: "What is your biggest strength and weakness?", type: "HR", level: "Basic" },
    { q: "Why should we hire you?", type: "HR", level: "Common" },
    { q: "What is the Virtual DOM in React?", type: "Technical", level: "Intermediate" },
    { q: "Difference between '==' and '===' in JS?", type: "Technical", level: "Basic" },
    { q: "Explain Closures in JavaScript.", type: "Technical", level: "Advanced" },
    { q: "What are React Hooks? Name common ones.", type: "Technical", level: "Intermediate" },
    { q: "Difference between SQL and NoSQL databases?", type: "Technical", level: "Intermediate" },
    { q: "How does CSS Flexbox work?", type: "Technical", level: "Basic" },
    { q: "What is an API? How does REST work?", type: "Technical", level: "Intermediate" },
    { q: "Explain the concept of State Management.", type: "Technical", level: "Advanced" },
    { q: "How to optimize a website's performance?", type: "Technical", level: "Advanced" },
    { q: "What is Redux and why is it used?", type: "Technical", level: "Intermediate" },
    { q: "How do you handle conflict in a team?", type: "HR", level: "Behavioral" },
    { q: "What is your notice period/salary expectation?", type: "HR", level: "Final" }
  ];

  return (
    <div style={{ padding: '40px', background: '#f0f4f8', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <button onClick={() => navigate('/home')} style={backBtn}>← Back to Home</button>
      
      <h1 style={{ color: '#1a73e8', marginBottom: '10px' }}>Preparation Hub</h1>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>Master your interviews with these resources and questions.</p>

      {/* USEFUL LINKS SECTION */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={sectionTitle}>Useful Learning Resources</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {learningLinks.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noreferrer" style={linkCard}>
              <span style={{ fontSize: '12px', color: '#1a73e8', fontWeight: 'bold' }}>{link.platform}</span>
              <h4 style={{ margin: '5px 0', color: '#1e293b' }}>{link.name}</h4>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Visit Site →</span>
            </a>
          ))}
        </div>
      </section>

      {/* QUESTIONS SECTION */}
      <section>
        <h2 style={sectionTitle}>Top Interview Questions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {questions.map((item, i) => (
            <div key={i} style={qCard}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={badge}>{item.type}</span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>{item.level}</span>
              </div>
              <h3 style={{ fontSize: '16px', color: '#1e293b', lineHeight: '1.4' }}>{item.q}</h3>
              <button style={ansBtn}>View Answer</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- STYLES ---
const backBtn = { background: 'none', border: 'none', color: '#1a73e8', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px' };
const sectionTitle = { fontSize: '20px', color: '#1e293b', marginBottom: '20px', borderLeft: '4px solid #1a73e8', paddingLeft: '15px' };

const linkCard = { 
  background: '#fff', padding: '15px 20px', borderRadius: '15px', textDecoration: 'none', 
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', minWidth: '180px', transition: '0.3s' 
};

const qCard = { background: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.02)', border: '1px solid #eef2f6' };
const badge = { fontSize: '10px', background: '#e0f2fe', color: '#0369a1', padding: '4px 10px', borderRadius: '10px', fontWeight: 'bold' };
const ansBtn = { marginTop: '15px', background: '#f1f5f9', color: '#1e293b', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', width: '100%' };

export default Prepare;