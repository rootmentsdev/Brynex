import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { RxDividerVertical } from 'react-icons/rx'; 
import { Image } from 'react-bootstrap';
import Brand from '../assets/Brand.jpg';
import Brand2 from '../assets/Brand2.png';  
import Brand3 from '../assets/Brand3.png';  

const BrandPage = () => {
  return (
    <Container>
      {/* Title Section */}
      <div className='mx-3 ms-md-5 mt-5'>
        <div style={{ marginTop: '80px' }}>
          <p style={{ fontSize: "16px" }}>//Brands</p>
          <h1
            className="mb-4"
            style={{
              fontSize: "48px",
              fontWeight: "500",
              color: "#171717",
              marginBottom: "5px"
            }}
          >
            Explore Our <br />
            Premium Brands
          </h1>
        </div>
      </div>

      {/* Divider Section */}
      <div className="mx-3 ms-md-5 mt-5 mb-5 pb-5">
        <div >
          <div style={{marginTop:'60px'}} className="d-flex align-items-center">

            <div className='me-md-5'>
              <h3 className='me-md-5 d-md-none' style={{fontSize:"16px", color: '#171717', opacity: "60%" }}>Building the future of fashion Brynex Apparels is home to Kerala's most recognized fashion rental and retail brandsretail through innovation and excellence</h3>
              <h3 className='me-md-5 d-none d-md-block' style={{fontSize:"20px" ,color: '#171717', opacity: "60%" }}>Building the future of fashion Brynex Apparels is home to Kerala's <br />                                                                       
                 most recognized fashion rental and retail brandsretail through <br />                                                                          
                 innovation and excellence</h3>
            </div>
          </div>
        </div>



      </div>
    {/* suitor guy */}
       <div className="mx-3 ms-md-5 mt-5 mb-5 pb-5" style={{minHeight:"418px"}}>  
          <div className='mt-5 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center'>
          <div className='mb-4 mb-md-0'>
            <h3 style={{fontSize:"28px"}} className='mt-1 d-md-none'>Suitor Guy</h3>
            <h3 style={{fontSize:"40px"}} className='mt-1 d-none d-md-block'>Suitor Guy</h3>      
            <p style={{fontSize:"18px", fontStyle:"italic"}} className='mt-1 d-md-none'>Be the man they remember.</p>
            <p style={{fontSize:"24px" , fontStyle:"italic"}} className='mt-1 d-none d-md-block'>Be the man they remember.</p>                                                    
            <p className='mt-1' style={{color: '#171717', opacity: "60%"}}>Premium men's wedding rental and fashion <br className='d-none d-md-block' /> brand offering suits, tuxedos, and accessories</p>                                                                   
          </div>
          <Image className='me-md-5 w-100' style={{
                maxWidth: '741px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain'


              }} src={Brand} alt="Suitor Guy" fluid />
          </div>

        </div>


        {/* zorruci */}

         <div className="mx-3 ms-md-5 mt-5 mb-5 pb-5">
          <div className='mt-5 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center'>

          <Image className='mb-4 mb-md-0 w-100' style={{
                maxWidth: '741px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain'


              }} src={Brand2} alt="zorruci " fluid />
          <div className='me-md-5'>
            <h3 style={{fontSize:"28px"}} className='mt-1 d-md-none'>Zorucci</h3>
            <h3 style={{fontSize:"40px"}} className='mt-1 d-none d-md-block'>Zorucci</h3>        
            <p style={{fontSize:"18px", fontStyle:"italic"}} className='mt-1 d-md-none'>Elegance, made effortless.</p>
            <p style={{fontSize:"24px" , fontStyle:"italic"}} className='mt-1 d-none d-md-block'>Elegance, made effortless.</p>                                                  
            <p className='mt-1' style={{color: '#171717', opacity: "60%"}}>Kerala's refined bridal and women's wear <br className='d-none d-md-block' /> destination, featuring bridal gowns, partywear,  <br className='d-none d-md-block' /> jewelry, and accessories.</p>                                
          </div>

          </div>

        </div>


        {/* Dappr Squad  */}

          <div className="mx-3 ms-md-5 mt-5 mb-5 pb-5" style={{minHeight:"418px"}}>  
          <div className='mt-5 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center'>
          <div className='mb-4 mb-md-0'>
            <h3 style={{fontSize:"28px"}} className='mt-1 d-md-none'>Dappr Squad</h3>
            <h3 style={{fontSize:"40px"}} className='mt-1 d-none d-md-block'>Dappr Squad</h3>      
            <p style={{fontSize:"18px", fontStyle:"italic"}} className='mt-1 d-md-none'>For the groom's crew, done right.</p>
            <p style={{fontSize:"24px" , fontStyle:"italic"}} className='mt-1 d-none d-md-block'>For the groom's crew, done right.</p>                                                    
            <p className='mt-1' style={{color: '#171717', opacity: "60%"}}>Premium men's wedding rental and fashion <br className='d-none d-md-block' /> brand offering suits, tuxedos, and accessories</p>                                                                   
          </div>
          <Image className='me-md-5 w-100' style={{
                maxWidth: '741px',
                width: '100%',
                height: 'auto',
                objectFit: 'contain'


              }} src={Brand3} alt="Suitor Guy" fluid />
          </div>

        </div>
    </Container>
  );
};

export default BrandPage;
