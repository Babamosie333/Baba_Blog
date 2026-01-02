export default function Home() {
  return (
    <main style={{ 
      padding: '100px 20px', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      color: 'white', 
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
        🚀 Welcome to My Portfolio!
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '40px' }}>
        BCA Student | Full-Stack Developer | Kanpur, UP
      </p>
      <a 
        href="/blog" 
        style={{
          display: 'inline-block',
          padding: '15px 40px',
          background: 'white',
          color: '#667eea',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          borderRadius: '50px',
          textDecoration: 'none',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}
      >
        🌟 Visit My Blog
      </a>
    </main>
  )
}
