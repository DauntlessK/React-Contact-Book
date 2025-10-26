import React from 'react';

function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {contacts.map((contact) => (
        <li key={contact.id} style={{ marginBottom: '1rem' }}>
          <span class="contactName"><strong>{contact.name}</strong></span> <button
            onClick={() => deleteContact(contact.id)}
            style={{ marginLeft: '2.5rem' }}
          >
            <span class="material-symbols-outlined">delete</span>
          </button><br />
          ✉️ {contact.email}<br />
          📞 {contact.phone}
          <br />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
