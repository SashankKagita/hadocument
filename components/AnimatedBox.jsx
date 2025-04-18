import { useState, useEffect } from 'react'

export function AnimatedBox({ children, delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [delay])
  
  const getTransform = () => {
    switch(direction) {
      case 'up': return 'translateY(20px)'
      case 'down': return 'translateY(-20px)'
      case 'left': return 'translateX(20px)'
      case 'right': return 'translateX(-20px)'
      default: return 'translateY(20px)'
    }
  }
  
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
} 