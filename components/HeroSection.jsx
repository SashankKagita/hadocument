import { useState, useEffect } from 'react'
import Link from 'next/link'

export function HeroSection({ title, subtitle, ctaText, ctaLink }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        padding: '4rem 1.5rem',
        borderRadius: '1rem',
        color: 'white',
        textAlign: 'center',
        marginBottom: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background circles */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        top: '-100px',
        left: '-100px',
        animation: 'float 8s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        bottom: '-50px',
        right: '-50px',
        animation: 'float 10s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          {title}
        </h1>
        
        <p
          style={{
            fontSize: '1.125rem',
            marginBottom: '2rem',
            opacity: 0.9,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease, transform 0.8s ease',
            transitionDelay: '200ms'
          }}
        >
          {subtitle}
        </p>
        
        <div
          style={{
            backgroundColor: 'white',
            color: '#4f46e5',
            fontWeight: 'bold',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            display: 'inline-block',
            cursor: 'pointer',
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease, transform 0.8s ease, background-color 0.3s ease',
            transitionDelay: '400ms',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem'
          }}
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translatey(0px);
          }
          50% {
            transform: translatey(-20px);
          }
          100% {
            transform: translatey(0px);
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  )
} 