import {Link} from 'react-router-dom'

export const Header = ()=>{
    return(
        <div>
        <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-car"></i>
          RENT-A-CAR
        </Link>
      </h1>
      <ul>
        <li><Link to="/cars">Cars</Link></li>
        {/* <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li> */}
      </ul>
    </nav>
        </div>
    )
}