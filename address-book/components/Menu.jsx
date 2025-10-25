import React from 'react';

function Menu() {
  return (
    <header style={styles.header}>
      <h2 style={styles.title}>Kyle's Rolodex</h2>
      <nav>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>About</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    width: 600,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: '#2c3e50',
    color: '#ecf0f1',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    fontFamily: '"Alumni Sans Pinstripe", sans-serif',
  },
  title: {
    margin: 0,
  },
  link: {
    color: '#ecf0f1',
    marginLeft: '1rem',
    textDecoration: 'none',
  }
};

export default Menu;

