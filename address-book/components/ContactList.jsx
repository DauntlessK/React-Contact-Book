import React from 'react';

function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {contacts.map((contact) => (
        <li key={contact.id} style={{ marginBottom: '1rem' }}>
          <strong>{contact.name}</strong><br />
          ✉️ {contact.email}<br />
          📞 {contact.phone}
          <br />
          <button
            onClick={() => deleteContact(contact.id)}
            style={{ marginTop: '0.5rem' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
