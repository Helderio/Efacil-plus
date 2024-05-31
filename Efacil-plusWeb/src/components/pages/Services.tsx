import React from 'react';

interface Service {
    title: string;
    description: string;
}

const Services = () => {
    // Informações sobre os serviços da empresa
    const companyServices: Service[] = [
        {
            title: 'Web Development',
            description: 'We create responsive and user-friendly websites tailored to your needs.'
        },
        {
            title: 'Mobile App Development',
            description: 'We develop custom mobile applications for iOS and Android platforms.'
        },
        {
            title: 'Graphic Design',
            description: 'Our team designs stunning graphics for your branding and marketing materials.'
        }
        // Adicione mais serviços conforme necessário
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Services</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {companyServices.map((service, index) => (
                    <div key={index} style={{ marginBottom: '30px', textAlign: 'left' }}>
                        <h3 style={{ marginBottom: '10px' }}>{service.title}</h3>
                        <p style={{ margin: 0 }}>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
