import React from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container>
            <div className='mx-3 ms-md-5 mt-4'>
                <h1 style={{fontSize: '48px', fontWeight: '500', marginBottom: '5px', color: '#171717', lineHeight: '1.2'}}>
                    Shaping the Future of Fashion & Retail
                </h1>
                <p style={{fontSize: '16px', color: '#171717', opacity: '0.6', textAlign: 'justify', lineHeight: '1.6', marginTop: '6px'}} className='mt-4'>
                    Brynex Apparels is a Kerala-based parent company driving India's fashion rental and retail revolution through iconic brands and intelligent in-house systems.
                </p>
            </div>
        </Container>
    );
};

export default HomePage;