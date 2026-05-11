'use client';
import React from 'react';

/**
 * VORTEX SOVEREIGN - ALPHA FEED (CHAT)
 * Hata Giderilmiş Kesin Sürüm
 */
export default function ChatPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>VORTEX ALPHA FEED</h1>
        <div style={styles.status}>
          <span style={styles.pulse}></span> CANLI BAĞLANTI
        </div>
      </header>

      <main style={styles.chatArea}>
        <div style={styles.message}>
          <span style={styles.system}>[SİSTEM]:</span> Terminal hazır. Alpha üyeleri için şifreli kanal açıldı.
        </div>
      </main>

      <footer style={styles.inputSection}>
        <input 
          type="text" 
          placeholder="Komut girişi yapın..." 
          style={styles.input} 
        />
        <button style={styles.button}>İLET</button>
      </footer>
    </div>
  );
}

// İmparatorluk Görsel Standartları (CSS)
const styles = {
  container: {
    backgroundColor: '#020617',
    color: '#ffffff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'monospace',
    padding: '20px'
  },
  header: {
    borderBottom: '1px solid #1e293b',
    paddingBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#38bdf8',
    fontSize: '1.2rem',
    letterSpacing: '2px'
  },
  status: {
    fontSize: '0.8rem',
    color: '#10b981',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  pulse: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10b981',
    borderRadius: '50%',
    display: 'inline-block',
    boxShadow: '0 0 10px #10b981'
  },
  chatArea: {
    flexGrow: 1,
    padding: '20px 0',
    overflowY: 'auto'
  },
  message: {
    backgroundColor: '#0f172a',
    padding: '15px',
    borderRadius: '4px',
    borderLeft: '4px solid #38bdf8'
  },
  system: {
    color: '#38bdf8',
    fontWeight: 'bold',
    marginRight: '10px'
  },
  inputSection: {
    display: 'flex',
    gap: '10px',
    paddingTop: '20px'
  },
  input: {
    flexGrow: 1,
    backgroundColor: '#1e293b',
    border: '1px solid #334155',
    padding: '12px',
    color: 'white',
    borderRadius: '4px',
    outline: 'none'
  },
  button: {
    backgroundColor: '#38bdf8',
    color: '#000',
    padding: '0 25px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none'
  }
};