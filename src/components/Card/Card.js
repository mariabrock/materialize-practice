import React from 'react';
// import M from "materialize-css/dist/js/materialize.min.js";
import './Card.scss';

class Card extends React.Component  {
  componentDidMount() {
    
 }
  
  render() {
    return (

      <div>
        <div className="container">
          <h2>Cards</h2>
          <div className="row">
            <div className="col s12 l6">
              <div className="card">
                <div className="card-image"><img src="https://raw.githubusercontent.com/iamshaunjp/materialize-playlist/lesson-13/img/curry.jpg" alt="curry" />
                <a href="#" className="halfway-fab btn-floating pink pulse"><i className="material-icons">favorite</i></a></div>
                <div className="card-content">
                <div className="card-title">Mango & Chickpea Curry</div>
                  <p>The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.</p>
                </div>
                <div className="card-action">
                  <a href="#">More Details</a>
                  <a href="#">View Ingredients</a>
                </div>
              </div>
            </div>

            <div className="col s12 l6">
              <div className="card">
                  <div className="card-image"><img src="https://raw.githubusercontent.com/iamshaunjp/materialize-playlist/lesson-13/img/pasta.jpg" alt="pasta" />
                    <a href="#" className="halfway-fab btn-floating pink pulse"><i className="material-icons">favorite</i></a></div>
                    <div className="card-content">
                      <div className="card-title">Rainbow Pasta Salad</div>
                        <p>The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.</p>
                    </div>
                    <div className="card-action">
                    <a href="#">More Details</a>
                    <a href="#">View Ingredients</a></div>
                </div>
            </div>
          </div>
        </div>
      </div>    
    );
  };
}

export default Card;