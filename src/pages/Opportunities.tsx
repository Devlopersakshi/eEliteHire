import { useNavigate } from 'react-router-dom';

const Opportunities = () => {
  const navigate = useNavigate();

  // 30 items data
  const list = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    type: i % 2 === 0 ? "Internship" : "Hackathon",
    title: i % 2 === 0 ? `Software Engineering Intern - Phase ${i+1}` : `Global Innovation Hackathon 2026 #${i+1}`,
    company: i % 2 === 0 ? "Google Cloud" : "Microsoft Azure",
    location: i % 2 === 0 ? "Remote" : "Bangalore / Hybrid",
    stipend: i % 2 === 0 ? "₹35,000/month" : "Prize Pool: ₹10,00,000"
  }));

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
          <h2>Opportunities & Challenges</h2>
          <button onClick={() => navigate('/home')} style={{ padding: '8px 20px', borderRadius: '10px', border: '1px solid #1a73e8', color: '#1a73e8', background: '#fff', cursor: 'pointer' }}>Back to Home</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
          {list.map((item) => (
            <div key={item.id} style={{ background: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eef2f6' }}>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: 'bold', 
                padding: '4px 12px', 
                borderRadius: '50px', 
                background: item.type === "Internship" ? '#e0f2fe' : '#fef3c7',
                color: item.type === "Internship" ? '#0369a1' : '#92400e'
              }}>
                {item.type.toUpperCase()}
              </span>
              <h3 style={{ margin: '15px 0 8px', fontSize: '18px', color: '#1e293b' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>{item.company} • {item.location}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                <span style={{ fontWeight: 'bold', color: '#16a34a' }}>{item.stipend}</span>
                <button onClick={() => navigate('/success')} style={{ padding: '8px 18px', background: '#001f3f', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '14px' }}>Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;