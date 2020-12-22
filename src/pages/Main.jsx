import {Link} from 'react-router-dom'

export const Main = ()=> {
  return (
    <div>  
    <section className="landing">
      <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large"> Rent-A-Car<span className="typed"></span></h1>
            <p className="lead">
            YOU CAN SEARCH, CHOOSE AND RENT A CAR
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn">
                Login
              </Link>
            </div>
          </div>
      </div>
    </section>
 
    </div>
  );
}
