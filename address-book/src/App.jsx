import React, { useState } from 'react';
import ContactForm from '/components/ContactForm';
import ContactList from '/components/ContactList';
import Menu from '/components/Menu';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) => {
    const term = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(term) ||
      contact.email.toLowerCase().includes(term) ||
      contact.phone.toLowerCase().includes(term)
    );
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '600px',
          background: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Menu />

        <h1 style={{ textAlign: 'center', fontSize: '1.5rem', margin: '1rem 0' }}>
          WELCOME TO THE ROLODEX OF THE FUTURE
        </h1>

        <ContactForm addContact={addContact} />

        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid #ccc',
            outline: 'none',
            fontSize: '1rem',
          }}
        />

        <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
}

export default App;
