import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import './Modals.scss';

class Modals extends React.Component  {
  componentDidMount() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
    };

  
  render() {
    return (

      <div>
        <div className="container">
          <h2>Modals</h2>

          <a href="#terms" class="btn orange modal-trigger">Terms & Conditions</a>

          <div className="modal" id="terms">
            <div className="modal-content">
              <h4>Terms & Conditions</h4>
              <p>The last time you had a cheeseburger was too long ago. Try not to drool when you think about the slightly charred, medium-rare meat nestled between soft brioche, cradled in crisp iceberg lettuce and flavour amplifying condiments. Why are you still reading this- go get a cheeseburger.</p>
            </div>
            <div className="modal-footer">
              <a href="#" className="modal-close btn orange">Agree & Close</a>
            </div>
          </div>
        </div>

      </div>    
    );
  };
}

export default Modals;