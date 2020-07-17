import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import './Navbar.scss';

class Navbar extends React.Component  {
  componentDidMount() {
    let sidenav = document.querySelector("#mobile-links");
    M.Sidenav.init(sidenav, {});
 }
  
  render() {
    return (

      <div>
        <nav className="nav-wrapper indigo">
          <div className="container">
          <a href="#" className="brand-logo">Site Title</a>
          <a href="#" className="sidenav-trigger" data-target="mobile-links"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#" className="btn-floating indigo darken-4 z-depth-0"><i className="material-icons">notifications</i></a></li>
              <li><span className="badge white-text pink new">5</span></li>
            </ul>
          </div>
        </nav>

        <div>
          <ul className="sidenav" id="mobile-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
      </div>    
    );
  };
}

export default Navbar;