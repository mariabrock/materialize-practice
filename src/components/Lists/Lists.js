import React from 'react';

import './Lists.scss';

class Lists extends React.Component  {
  componentDidMount() {
    
 }
  
  render() {
    return (

      <div>
        <div className="container">
          <h2> Collections</h2>
          <ul className="collection with-header">
          <li className="collection-header"><h4>Customers</h4></li>

            <li className="collection-item avatar">
              <i className="material-icons circle blue">person</i>
              <span className="title">Ryu</span>
              <p className="grey-text">black-belt</p>
              <a href="#" className="secondary-content">
                <i className="material-icons blue-text">email</i>
              </a>
            </li>

            <li className="collection-item avatar">
              <i className="material-icons circle blue">person</i>
              <span className="title">Yoshi</span>
              <p className="grey-text">black-belt</p>
              <a href="#" className="secondary-content">
                <i className="material-icons blue-text">email</i>
              </a>
            </li>

            <li className="collection-item avatar">
              <i className="material-icons circle blue">person</i>
              <span className="title">Crystal</span>
              <p className="grey-text">black-belt</p>
              <a href="#" className="secondary-content">
                <i className="material-icons blue-text">email</i>
              </a>
            </li>

            <li className="collection-item avatar">
              <i className="material-icons circle blue">person</i>
              <span className="title">Mario</span>
              <p className="grey-text">black-belt</p>
              <a href="#" className="secondary-content">
                <i className="material-icons blue-text">email</i>
              </a>
            </li>

            <li className="collection-item avatar">
              <i className="material-icons circle blue">person</i>
              <span className="title">Luigi</span>
              <p className="grey-text">black-belt</p>
              <a href="#" className="secondary-content">
                <i className="material-icons blue-text">email</i>
              </a>
            </li>

            <li className="collection-item avatar">
              <i className="material-icons circle blue">person</i>
              <span className="title">Bowser</span>
              <p className="grey-text">black-belt</p>
              <a href="#" className="secondary-content">
                <i className="material-icons blue-text">email</i>
              </a>
            </li>
          </ul>
        </div>
      </div>    
    );
  };
}

export default Lists;