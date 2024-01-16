import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Carousel } from 'bootstrap'; // Import Bootstrap Carousel JavaScript
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';

const MyCarousel = () => {
  return (
<> 
    <section>
  <div className='container'>
      <div className='row d-flex'>
        <div className='col-12'>
          <div className='row'>
            <div className='col-8'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
       <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="Images/man-2178721_1280.jpg"  className="d-block w-100" alt="Slide 1"  style={{ height: '300px', width: '100%'}}/>
          <div className="carousel-caption position-absolute top-0 end-0 p-3">
          <div className="swiper-container" style={{ position: 'absolute', top: '10px', right: '10px', width: '200px' }}>
      <p>UPTO 70% OFF</p>
      <p>BEST OF BRANDS</p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
        </div>
        </div>
        <div className="carousel-item">
          <img src="Images/model-2911329_1280.jpg" className="d-block w-100" alt="Slide 2" style={{ height: '300px', width: '100%'}} />
           <div className="carousel-caption position- absolute top-0 end-0 p-3">
           <div className="swiper-container" style={{ position: 'absolute', top: '10px', right: '10px', width: '200px' }}>
                      <p>UPTO 70% OFF</p>
                      <p>BEST OF BRANDS</p>
                      <button className="btn btn-primary">Shop Now</button>
                    </div> 
                  </div>  
        </div>
        <div className="carousel-item">
          <img src="Images/ecommerce-2140603_1280.jpg" className="d-block w-100" alt="Slide 3" style={{ height: '300px', width: '100%'}} />
          {/* <div className="carousel-caption">
                      <p>UPTO 70% OFF</p>
                      <p>BEST OF BRANDS</p>
                      <button className="btn btn-primary">Shop Now</button>
                    </div> */}
        </div>
      </div> 
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"  style={{borderRadius: "50px", backgroundColor: "white", color: "black"}} aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" style={{borderRadius: "50px", backgroundColor: "white", color: "black"}} aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
            </div>
          
            <div className='col-4'>
      <div className="card">
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ backgroundColor: "yellow", fontSize: "2rem", padding: "10px" }} />
        <div className="card-body text-center">
          <h5 className="card-title py-2">Your Delivery Pincode</h5>
          <p className="card-text py-2">Enter your pin code to check availability and faster delivery options</p>
          <input type="text" placeholder="Enter Pincode" />
          <div className="d-flex justify-content-center align-items-center gap-2 py-4">
            <button className="btn btn-primary">Submit</button>
            <button className="btn btn-dark text-white">Next</button>
          </div>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='col-8'>
            <Navbar bg="light" expand="lg" className="navbar-border-animation">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="#home " className='me-5'>Below 299 Store</Nav.Link>
                    <Nav.Link href="#features" className='me-5'>Best of Brands</Nav.Link>
                    <Nav.Link href="#pricing" className='me-5'>Pen Gift Sets</Nav.Link>
                    <Nav.Link href="#pricing">RBL Bank</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              </div>
              <div className='col-4'>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
        <div className='' style={{backgroundColor:"#FFE5E5"}}>
              <h3>TRENDING PRODUCTS</h3>
            </div>
            <div>
              <Swiper
                spaceBetween={10}
                slidesPerView={5}
                navigation
                loop
              >
                <SwiperSlide>
                  <img src="Images/laptop1.jpeg" alt="Slide 1" style={{ height: '250px', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="Images/laptop2.jpeg" alt="Slide 2" style={{ height: '250px', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="Images/laptop3.jpeg" alt="Slide 3" style={{ height: '250px', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="Images/laptop4.jpeg" alt="Slide 1" style={{ height: '250px', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="Images/laptop5.jpeg" alt="Slide 2" style={{ height: '250px', width: '100%' }} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="Images/laptop4.jpeg" alt="Slide 3" style={{ height: '250px', width: '100%' }} />
                </SwiperSlide>
                 <SwiperSlide>
                  <img src="Images/laptop2.jpeg" alt="Slide 2" style={{ height: '250px', width: '100%' }} />
                </SwiperSlide>
                 <SwiperSlide>
                  <img src="Images/laptop2.jpeg" alt="Slide 2" style={{ height: '250px', width: '100%' }} />
                </SwiperSlide>
                {/* Add more SwiperSlide components for additional images */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>

   

     
    </>

  );
};

export default MyCarousel;
