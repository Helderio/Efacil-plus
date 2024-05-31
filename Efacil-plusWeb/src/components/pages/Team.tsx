import React from 'react';

interface TeamMember {
    name: string;
    position: string;
    bio: string;
}

const Team = () => {
    // Informações sobre os membros da equipe
    const teamMembers: TeamMember[] = [
        {
            name: 'John Doe',
            position: 'CEO',
            bio: 'John is the founder and CEO of our company. He has a passion for innovation and leadership.'
        },
        {
            name: 'Jane Smith',
            position: 'CTO',
            bio: 'Jane oversees our technical team and ensures the quality and efficiency of our products.'
        },
        {
            name: 'Alice Johnson',
            position: 'Designer',
            bio: 'Alice is our talented designer, responsible for creating visually stunning user interfaces.'
        }
        // Adicione mais membros da equipe conforme necessário
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Team</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {teamMembers.map((member, index) => (
                    <div key={index} style={{ marginBottom: '30px', textAlign: 'left' }}>
                        <h3 style={{ marginBottom: '10px' }}>{member.name}</h3>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>{member.position}</p>
                        <p style={{ margin: 0 }}>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
