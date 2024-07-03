const CollectionCard = (props) =>{
    return(
        <>
            <div class="card h-100 d-flex justify-content-center align-items-center text-center border-0">
                <img src={props.img} class="card-img-top img-fluid" alt="Image Not Found"/>
                <div class="card-body">
                  <p class="card-text">{props.name}</p>
                  <p class="card-text fw-bold">{props.price}</p>
                  <button className='bg-color2 text-white border-0 px-3 py-2'>{props.btn}</button>
                </div>
              </div>
        </>
    )
}
export default CollectionCard;