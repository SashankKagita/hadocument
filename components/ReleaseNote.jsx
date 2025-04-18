export function ReleaseNote({ version, date, highlights, isLatest = false }) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '0.75rem',
        padding: '1.25rem',
        marginBottom: '1.5rem',
        backgroundColor: isLatest ? '#f0f9ff' : '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {isLatest && (
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '-20px',
            backgroundColor: '#0ea5e9',
            color: 'white',
            padding: '0.25rem 1.5rem',
            transform: 'rotate(45deg)',
            fontWeight: 'bold',
            fontSize: '0.75rem',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
          }}
        >
          LATEST
        </div>
      )}
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <h3 style={{ 
          fontSize: '1.125rem', 
          fontWeight: 'bold',
          color: isLatest ? '#0369a1' : '#111827' 
        }}>
          {version}
        </h3>
        <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{date}</span>
      </div>
      
      <ul style={{ 
        paddingLeft: '1.5rem',
        margin: '0',
        listStyleType: 'disc' 
      }}>
        {highlights.map((highlight, index) => (
          <li key={index} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  )
} 