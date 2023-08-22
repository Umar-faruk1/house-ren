// import { Card, Container } from "react-bootstrap"
 import { Link } from "react-router-dom"

import Image1  from "../images/image1.jpg"
import Image2  from "../images/image3.jpg"




const Cards = () => {
  return (
    <div className="card-container">
      <div className="card-self">
        <img style={{ width: '20rem' }} src='https://dailycivil.com/wp-content/uploads/2021/12/Bungalow.webp' alt=""/>
        <h4>Detached house</h4>
        <p>City B, Country Ya
          Duration: 6 month
          Pellentesque habitant morbi tristique senectus et netus et malesuada...
        </p>
        <Link to="/Payment" className="btn">Rent</Link>
      </div>
      <div className="card-self">
        <img style={{ width: '20rem' }} src='https://dailycivil.com/wp-content/uploads/2021/12/villa.webp' alt=""/>
        <h4>Villa</h4>
        <p>City B, Country Y
          Duration: 6 month
          Pellentesque habitant morbi tristique senectus et netus et malesuada...
        </p>
        <Link to="/Payment" className="btn">Rent</Link>
      </div>
      <div className="card-self">
        <img style={{ width: '20rem' }} src='https://dailycivil.com/wp-content/uploads/2021/12/Mansion-House.webp' alt=""/>
        <h4>Castle</h4>
        <p>City B, Country Y
          Duration: 6 month
          Pellentesque habitant morbi tristique senectus et netus et malesuada...
        </p>
        <Link to="/Payment" className="btn">Rent</Link>
      </div>
    </div>
  
  )
}

export default Cards

