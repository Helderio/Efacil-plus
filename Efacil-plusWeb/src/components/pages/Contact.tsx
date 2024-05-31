import React from 'react';

interface ContactInfo {
    email: string;
    phone: string;
}

const Contacts = () => {
    // Informações de contato da empresa
    const companyContacts: ContactInfo[] = [
        { email: 'info@example.com', phone: '+1234567890' },
        { email: 'support@example.com', phone: '+0987654321' }
        // Adicione mais informações de contato, se necessário
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Contacts</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {companyContacts.map((contact, index) => (
                    <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '15px' }}>
                        <p style={{ margin: 0 }}><strong>Email:</strong> {contact.email}</p>
                        <p style={{ margin: 0 }}><strong>Phone:</strong> {contact.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contacts;
