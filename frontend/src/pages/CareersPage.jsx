import React from 'react'
import { Container } from 'react-bootstrap';

const CareersPage = () => {
  return (
    <Container>
      <div className='mx-3 ms-md-5 mt-5'>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '500',
          marginTop: '110px',
          marginBottom: '5px',
          color: '#000'
        }}>Careers Page</h1>
        <p style={{
          fontSize: '14px',
          lineHeight: '20px'
        }}>Content for careers page goes here.</p>
      </div>
    </Container>
  )
}

export default CareersPage
