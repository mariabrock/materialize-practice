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
        <nav class="nav-wrapper indigo">
          <div class="container">
          <a href="#" class="brand-logo">Site Title</a>
          <a href="#" class="sidenav-trigger" data-target="mobile-links"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>
        </nav>

        <div>
          <ul class="sidenav" id="mobile-links">
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