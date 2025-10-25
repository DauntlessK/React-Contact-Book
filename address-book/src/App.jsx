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
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '2rem' }}>
      <Menu />

      <h1>WELCOME TO THE ROLODEX OF THE FUTURE</h1>
      <ContactForm addContact={addContact} />

      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
