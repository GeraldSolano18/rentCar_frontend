import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

export const Cars = ()=>{
  const [cars, setCar] = useState([])

  useEffect(() => {
    axios({
        url: `http://localhost:4000/api/cars/`,
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    }).then((res) => {
        setCar(
            res.data
        )

    })
}, [])
console.log(cars)
    return(
        <>
         <section className="container">
      <h1 className="large text-primary">
        Cars
      </h1>
      <p className="lead">
        <i className="fab fa-connectdevelop"></i>
        Browse and choose your car
      </p>
      <div className="profiles">
      {cars.map((props) => (
                <>

<div className="profile bg-ligth">
          <img alt='img'  src="https://www.megautos.com/wp-content/uploads/2018/09/Toyota-Yaris-2019-hatch-frente.jpg" />
          <div>
            <h2>{props.brand}</h2>
            <p><strong>Model:</strong> {props.model}</p>
            <p><strong>Price per day: </strong>{props.priceForDay} $US</p>
            <p><strong>availability:</strong>
            {props.state === 0? <span class="badge badge-success">available</span>:
            <span class="badge badge-danger">not available</span>
            }</p>

            <Link to="/" className="my-1 btn btn-primary">
                View car
            </Link>
          </div>
        </div>

                </>


              ))
              }


      </div>
    </section>
        </>
    )
}