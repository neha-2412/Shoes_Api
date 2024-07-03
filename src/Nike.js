import axios from 'axios';
import { useState } from 'react';
import freeshipping from './Images/freeshipping.png';
import moneyBack from './Images/moneyBack.png';
import loyaltyCustomer from './Images/loyaltyCustomer.png';
import safePayment from './Images/safePayment.png';
import product1 from './Images/product1.jpg';
import product2 from './Images/product2.jpg';
import product3 from './Images/product3.jpg';
import product4 from './Images/product4.jpg';
import product5 from './Images/product5.jpg';
import product6 from './Images/product6.jpg';
import ServiceCard from './ServiceCard';
import CollectionCard from './CollectionCard';

var data1 = [];

const Nike = (props) => {

  const [data, setData] = useState(data1);

  const getDataFromAPI = () =>{
    
    const options = {
      method: 'GET',
      url: 'https://real-time-product-search.p.rapidapi.com/search',
      params: {
        q: 'Nike shoes',
        country: 'us',
        language: 'en',
        limit: '30',
        sort_by: 'BEST_MATCH',
        product_condition: 'ANY',
        min_rating: 'ANY'
      },
      headers: {
        'x-rapidapi-key': '84d49e2841mshc4c1e17815cc83fp144fe9jsn0f00cbc8a7a5',
        'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
      }
    };

    axios.request(options).then((opt) =>{
      console.log(opt.data.data);
      console.log(opt.data.data[0]);
      console.log(opt.data.data[0].product_title);
      console.log(opt.data.data[0].product_rating);
      console.log(opt.data.data[0].typical_price_range);
      console.log(opt.data.data[0].product_photos[0]);
      console.log(opt.data.data[0].product_attributes.Size);
      console.log(opt.data.data[0].product_attributes.Department);

      setData(opt.data.data);

    }).catch((error) =>{
      console.log(error);
    })
  }

  const servicesInfo = [
    {
      img: freeshipping,
      title: "Free Shipping",
      desc: "Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!"
    },
    {
      img: moneyBack,
      title: "30 DAYS MONEY BACK",
      desc: "100% satisfaction guaranteed, or get your money back within 30 days!"
    },
    {
      img: safePayment,
      title: "Safe Payment",
      desc: "Pay with the world's most popular and secure payment methods."
    },
    {
      img: loyaltyCustomer,
      title: "Loyalty Customer",
      desc: "Card for the other 30% of their purchases at a rate of 1% cash back."
    },
  ]

  const collectionsInfo = [
    {
      img: product1,
      name: "Nike Air Force 1 '08",
      price: "$50.00",
      btn: "Add to Cart"
    },
    {
      img: product2,
      name: "Nike Air Force 1 '07",
      price1: "$95.00",
      btn: "Add to Cart"
    },
    {
      img: product3,
      name: "Nike Air Force 1 '08",
      price: "$45.00 - $60.00",
      btn: "Select Options"
    },
    {
      img: product4,
      name: "Nike Ultrafly",
      price: "$75.00",
      btn: "Buy Products"
    },
    {
      img: product5,
      name: "Nike Go FlyEase",
      price: "$61.00",
      btn: "Buy Woovina"
    },
    {
      img: product6,
      name: "LeBron XX EP",
      price: "$50.00 - $95.00",
      btn: "Add to Cart"
    },
  ]

  return (
    <>
        <div className='container-fluid bg-color1 position-fixed' id='header'>
            <div className='row'>
                <div className='col-12'>
                <nav class="navbar navbar-expand-lg" id="navbar">
                    <div class="container-fluid px-xl-5">
                      <a class="navbar-brand" href="#" data-aos="zoom-in" data-aos-duration="500">
                        <img src={props.info.logo} alt="Image Not Found" class="img-fluid logo"/>
                      </a>
                      <button class="navbar-toggler border-0 text-dark fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-lg-0">
                          <li class="nav-item px-1 fs-5">
                            <a class="nav-link text-white" href="#"><i class="fas fa-search"></i></a>
                          </li>
                          <li class="nav-item px-1 fs-5">
                            <a class="nav-link text-white" href="#"><i class="far fa-heart"></i></a>
                          </li>
                          <li class="nav-item px-1 fs-5">
                            <a class="nav-link text-white" href="#"><i class="fas fa-shopping-bag"></i></a>
                          </li>
                          <li class="nav-item px-1 fs-5">
                            <a class="nav-link text-white" href="#"><i class="fas fa-user"></i></a>
                          </li>   
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="home">
        <div class="row">
            <div class="col-12 p-0">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner vh-100">
                      <div class="carousel-item active">
                        <img src={props.info.simg1} class="d-block w-100 vh-100 img-fluid" alt="..."/>
                        <div class="carousel-caption d-flex flex-column align-items-md-start justify-content-center h-100">
                            <p className='text-uppercase display-4 fw-semibold' data-aos="flip-right" >{props.info.stitle1}</p>
                            <p className='text-uppercase display-4 fw-bold' data-aos="flip-right">{props.info.stext1}</p>
                            <p className='fs-5'>{props.info.spara1}</p>
                            <div>
                              <button className='bg-white text-dark px-4 py-2 border-0 fw-semibold'>{props.info.sbtn}</button>
                            </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <img src={props.info.simg2} class="d-block w-100 vh-100 img-fluid" alt="..."/>
                        <div class="carousel-caption d-flex flex-column align-items-md-start justify-content-center h-100 ">
                            <p className='text-uppercase display-4 fw-semibold' data-aos="flip-right">{props.info.stitle2}</p>
                            <p className='text-uppercase display-4 fw-bold' data-aos="flip-right">{props.info.stext2}</p>
                            <p className='fs-5'>{props.info.spara2}</p> 
                            <div>
                              <button className='bg-white text-dark px-4 py-2 border-0 fw-semibold'>{props.info.sbtn}</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
        </div>
    </div>

    <div className='container-fluid py-5' id='services'>
      <div className='row p-3'>
        <div className='col-12'>
          <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <ServiceCard img={servicesInfo[0].img} title={servicesInfo[0].title} desc={servicesInfo[0].desc}/>
            </div>
            <div class="col">
              <ServiceCard img={servicesInfo[1].img} title={servicesInfo[1].title} desc={servicesInfo[1].desc}/>
            </div>
            <div class="col">
              <ServiceCard img={servicesInfo[2].img} title={servicesInfo[2].title} desc={servicesInfo[2].desc}/>
            </div>
            <div class="col">
              <ServiceCard img={servicesInfo[3].img} title={servicesInfo[3].title} desc={servicesInfo[3].desc}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className='container-fluid py-xl-4' id='mens'>
      <div className='row px-1'>
        <div className='col-12'>
          <div className='row'>
            <div className='col-12 text-center d-block d-lg-none '>
                  <h3 className='text-uppercase'>{props.info.menstitle}</h3>
                  <p className='text-secondary'>{props.info.menspara}</p>
            </div>
            <div className='col-12 col-lg-4 ps-md-5 pt-3 pt-lg-0 pb-5 pb-lg-0 mt-lg-5 mt-xl-0 text-center' data-aos="zoom-in-up" data-aos-duration="1000">
             <img src={props.info.mensimg} alt="Image Not Found" className='img-fluid mt-lg-3'/>
            </div>
            <div className='col-12 col-lg-8 pe-lg-5 ps-lg-4'>
              <div className='row'>
                <div className='col-12 text-center d-none d-lg-block '>
                  <h3 className='text-uppercase'>{props.info.menstitle}</h3>
                  <p className='text-secondary'>{props.info.menspara}</p>
                </div>
                <div className='col-12'>
                  <div class="row g-4">
                    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-duration="1000">
                      <CollectionCard img={collectionsInfo[0].img} name={collectionsInfo[0].name} price={collectionsInfo[0].price} btn={collectionsInfo[0].btn}/>
                    </div>
                    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-duration="1500">
                      <CollectionCard img={collectionsInfo[1].img} name={collectionsInfo[1].name} price={collectionsInfo[1].price} btn={collectionsInfo[1].btn}/>
                    </div>
                    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-duration="2000">
                      <CollectionCard img={collectionsInfo[2].img} name={collectionsInfo[2].name} price={collectionsInfo[2].price} btn={collectionsInfo[2].btn}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='container-fluid py-xl-5' id='womens'>
      <div className='row px-1 py-5'>
        <div className='col-12'>
          <div className='row'>
            <div className='col-12 col-lg-8 pe-md-5 ps-md-4'>
              <div className='row'>
                <div className='col-12 text-center mt-lg-5'>
                  <h3 className='text-uppercase'>{props.info.womenstitle}</h3>
                  <p className='text-secondary'>{props.info.womenspara}</p>
                </div>
                <div className='col-12 mt-3 mt-lg-0'>
                  <div class="row g-4 ps-md-4">
                    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-duration="1000">
                      <CollectionCard img={collectionsInfo[3].img} name={collectionsInfo[3].name} price={collectionsInfo[3].price} btn={collectionsInfo[3].btn}/>
                    </div>
                    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-duration="1500">
                      <CollectionCard img={collectionsInfo[4].img} name={collectionsInfo[4].name} price={collectionsInfo[4].price} btn={collectionsInfo[4].btn}/>
                    </div>
                    <div class="col-12 col-md-4" data-aos="fade-up" data-aos-duration="2000">
                      <CollectionCard img={collectionsInfo[5].img} name={collectionsInfo[5].name} price={collectionsInfo[5].price} btn={collectionsInfo[5].btn}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-4 pt-5 pt-lg-0 pb-5 pb-lg-0 mt-lg-5 mt-xl-0 text-center' data-aos="zoom-in-up" data-aos-duration="1000">
             <img src={props.info.womensimg} alt="Image Not Found" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='container-fluid px-lg-5 bg-light py-5' id='sellers'>
        <div className='row px-2 py-5'>
          <div className='col-12 text-center'>
            <h3 className='text-uppercase'>{props.info.sellertitle}</h3>
            <button type='button' onClick={getDataFromAPI} className='btn btn-outline-primary bg-color2 mt-3 mb-5'>{props.info.sellerbtn}</button>
          </div>
            {data.map((info, key) =>{
              return(
                <div className='col-12 col-md-6 col-lg-4 pt-3 px-3' data-aos="fade-up" data-aos-duration="2000">
                    <div className="card">
                      <div>
                        <div className="card-body text-center bg-color1 rounded" key={key}>
                          <img src={info.product_photos[0]} alt='Image Not Found' className='img-fluid rounded'/>
                            <h5 className="card-title fw-bold text-white mt-3">{info.product_title}</h5>
                            <p>
                                <span className="card-text text-light me-3 fw-bold">{info.product_attributes.Department}</span>
                                <span className="card-text text-light"><span className='fw-bold'>Size: </span>{info.product_attributes.Size}</span>
                            </p>
                            <p className="card-text text-light"><span className='fw-bold'>Price Range: </span>{info.typical_price_range}</p>
                            <p className="card-text text-light"><span className='fw-bold'>Rating: </span> {info.product_rating}</p>
                        </div>
                      </div>                   
                    </div>
                </div>
              )
            })} 
        </div>
    </div>

      <div className='container-fluid d-none d-md-block' id='discover'>
        <div className='row py-5'>
          <div className='col-12 px-5' data-aos="zoom-in" data-aos-duration="1000">
              <p className='text-white fw-semibold fs-4'>{props.info.d1}</p>
              <p className='text-white fw-bold display-4'>{props.info.d2}</p>    
              <button className='bg-white text-dark fw-bold px-3 py-2 border-0'>{props.info.dbtn}</button>    
          </div>
        </div>
      </div>

      <div className='container-fluid py-5' id='partners'>
        <div className='row'>
          <div className='col-12'>
              <div className='row'>
                <div className='col-2 text-center' data-aos="fade-up" data-aos-duration="500">
                    <img src={props.info.img1} alt='Image Not Found' className='img-fluid'/>
                </div>
                <div className='col-2 text-center' data-aos="fade-up" data-aos-duration="700">
                    <img src={props.info.img2} alt='Image Not Found' className='img-fluid'/>
                </div>
                <div className='col-2 text-center' data-aos="fade-up" data-aos-duration="900">
                    <img src={props.info.img3} alt='Image Not Found' className='img-fluid'/>
                </div>
                <div className='col-2 text-center' data-aos="fade-up" data-aos-duration="1000">
                    <img src={props.info.img4} alt='Image Not Found' className='img-fluid'/>
                </div>
                <div className='col-2 text-center' data-aos="fade-up" data-aos-duration="1200">
                    <img src={props.info.img5} alt='Image Not Found' className='img-fluid'/>
                </div>
                <div className='col-2 text-center' data-aos="fade-up" data-aos-duration="1400">
                    <img src={props.info.img6} alt='Image Not Found' className='img-fluid'/>
                </div>
              </div>
          </div>
        </div>
      </div>
    
      <div class="container-fluid bg-dark pt-5 px-xl-5" id="footer">
      <div class="row py-5">
        <div class="col-12">
          <div class="row py-2">
            <div class="col-12 col-md-6 col-lg-4">
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-0 bg-dark text-white" data-aos="zoom-in" data-aos-duration="500"><img src={props.info.logo} alt="Image Not Found" class="img-fluid logo2"/></li>
                <li class="list-group-item border-0 bg-dark"></li>
                <li class="list-group-item border-0 bg-dark text-secondary"><p>{props.info.f11}</p></li>
                <li class="list-group-item border-0 color1 bg-dark"><a href="#" class="text-decoration-none text-secondary"><i class="fas fa-map-marker-alt"></i> {props.info.f12}</a></li>
                <li class="list-group-item border-0 color1 bg-dark"><a href="#" class="text-decoration-none text-secondary"><i class="fas fa-phone-alt"></i> {props.info.f13}</a></li>
                <li class="list-group-item border-0 color1 bg-dark"><a href="#" class="text-decoration-none text-secondary"><i class="fas fa-envelope"></i> {props.info.f14}</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-2 ps-lg-5 pb-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-0 color1 bg-dark text-white text-uppercase"><h5 className='fs-6'>{props.info.f21}</h5></li>
                <li class="list-group-item border-0 bg-dark"></li>
                <li class="list-group-item border-0 color1 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f22}</a></li>
                <li class="list-group-item border-0 color1 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f23}</a></li>
                <li class="list-group-item border-0 color1 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f24}</a></li>
                <li class="list-group-item border-0 color1 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f25}</a></li>
                <li class="list-group-item border-0 color1 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f26}</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-2 ps-lg-5 pb-3 pb-md-0">
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-0 bg-dark text-white text-uppercase"><h5 className='fs-6'>{props.info.f31}</h5></li>
                <li class="list-group-item border-0 bg-dark"></li>
                <li class="list-group-item border-0 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f32}</a></li>
                <li class="list-group-item border-0 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f33}</a></li>
                <li class="list-group-item border-0 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f34}</a></li>
                <li class="list-group-item border-0 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f35}</a></li>
                <li class="list-group-item border-0 bg-dark"><a href="#" class="text-decoration-none text-secondary">{props.info.f36}</a></li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-4 ps-lg-5">
              <ul class="list-group list-group-flush">
                <li class="list-group-item border-0 bg-dark text-white text-uppercase"><h5 className='fs-6'>{props.info.f41}</h5></li>
                <li class="list-group-item border-0 bg-dark"></li>
                <li class="list-group-item border-0 bg-dark"><a href="#" class="text-decoration-none text-secondary"><p>{props.info.f42}</p></a></li>
                <li class="list-group-item border-0 bg-dark">
                  <a href="#"class="text-decoration-none text-secondary">
                  <div class="input-group">
                    <input type="text" class="form-control bg-transperent rounded-0 text-secondary py-2" placeholder="Enter your email address" aria-label="Enter your email address" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-secondary rounded-0" type="button" id="button-addon2"><i class="fas fa-envelope-open-text color2"></i></button>
                  </div>
                  </a>
                </li>
                <li class="list-group-item border-0 bg-dark">
                  <a href="#" class="text-decoration-none text-secondary">
                    <ul class="list-group list-group-horizontal">
                      <li class="list-group-item bg-dark border border-white mx-1 rounded-0"  data-aos="fade-up" data-aos-duration="1000"><i class="fab fa-twitter text-white"></i></li>
                      <li class="list-group-item bg-dark border border-white mx-1"  data-aos="fade-up" data-aos-duration="1500"><i class="fab fa-facebook text-white"></i></li>
                      <li class="list-group-item bg-dark border border-white mx-1"  data-aos="fade-up" data-aos-duration="2000"><i class="fab fa-instagram text-white"></i></li>
                      <li class="list-group-item bg-dark border border-white mx-1 rounded-0"  data-aos="fade-up" data-aos-duration="2500"><i class="fab fa-youtube text-white"></i></li>
                    </ul>
                  </a>
                  </li>           
              </ul>
            </div>
            <hr class="border border-light mt-5"/>
            <div class="col-12 px-xl-5">
              <div class="row">
                <div class="col-12 col-md-8 text-center text-md-start">
                  <p class="text-secondary fs-6">{props.info.copy}</p>
                </div>
                <div class="col-12 col-md-4 ps-5" >
                    <img src={props.info.copyimg} alt='Image Not Found' className='img-fluid'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Nike;


