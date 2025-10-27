import React from 'react';

function Menu() {
  return (
    <header style={styles.header}>
      <div style={styles.centeredDiv}>
        <h2 style={styles.title}>Kyle&apos;s Rolodex</h2>
        <nav style={styles.nav}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>About</a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '1rem 0',
    fontFamily: '"Alumni Sans Pinstripe", sans-serif',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  centeredDiv: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.2s',
  },
};

export default Menu;
