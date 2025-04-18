import React from 'react'

export default {
  logo: (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      fontWeight: 'bold',
      fontSize: '1.25rem' 
    }}>
      <span style={{ 
        background: 'linear-gradient(to right, #4f46e5, #7c3aed)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent',
        marginRight: '0.5rem' 
      }}>
        Content
      </span>
      <span>Hub</span>
    </div>
  ),
  project: {
    link: 'https://github.com/SashankKagita/hadocument',
  },
  docsRepositoryBase: 'https://github.com/SashankKagita/hadocument/blob/main/',
  footer: {
    text: <span>Content Hub © {new Date().getFullYear()}</span>,
  },
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <div style={{ fontSize: '0.9rem', fontWeight: 'bold', opacity: 0.6 }}>{title}</div>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  search: {
    placeholder: 'Search documentation...'
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Content Hub - Your centralized resource for documentation and healthcare information" />
      <meta name="og:title" content="Content Hub" />
    </>
  ),
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  editLink: {
    text: 'Edit this page on GitHub'
  },
  toc: {
    title: 'On This Page',
    extraContent: <div style={{ padding: '1rem 0' }}></div>
  }
}
