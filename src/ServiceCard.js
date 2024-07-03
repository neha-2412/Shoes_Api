const ServiceCard = (props) =>{
    return(
        <>
            <div class="card h-100 d-flex justify-content-center align-items-center text-center border-0" data-aos="fade-zoom-in" data-aos-duration="3000">
                <img src={props.img} class="card-img-top w-25 img-fluid" alt="Image Not Found"/>
                <div class="card-body">
                  <h5 class="card-title text-uppercase">{props.title}</h5>
                  <p class="card-text">{props.desc}</p>
                </div>
              </div>
        </>
    )
}
export default ServiceCard;