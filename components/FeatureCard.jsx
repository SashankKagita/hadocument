import { useState } from 'react'

export function FeatureCard({ icon, title, description, bgColor = '#f8fafc' }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: bgColor,
        borderRadius: '1rem',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#4f46e5' }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#4b5563', flex: 1 }}>
        {description}
      </p>
    </div>
  )
} 