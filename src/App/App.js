import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <button className="btn btn-danger">Bootstrap Button</button>
      <h1>Materialize Css</h1>
      <div class="container">
        <h1>Hey, Ninjas!</h1>
        <h2>Hey, H2</h2>
        <h3>Hey, H3</h3>
        <h4>Hey, H4</h4>
        <h5>Hey, H5</h5>
        <h6>Hey, H6</h6>
        <p>This is a paragraph!</p>
        <p class="flow-text">This is flow text.</p>
      </div>

      <div class="container">
        <h4 class="hide">Hide me on all screen sizes</h4>
        <h4 class="hide-on-small-only">Hide me on small screen sizes</h4>
        <h4 class="hide-on-med-only">Hide me on medium screen sizes</h4>
        <h4 class="hide-on-large-only">Hide me on large screen sizes</h4>
        <h4 class="hide-on-med-and-down">Hide me on medium & small screen sizes</h4>
        <h4 class="hide-on-med-and-up">Hide me on medium and large screen sizes</h4>
        <h4 class="show-only-on-small">Only show me on small screens</h4>
      </div>

      <div class="container">
        <h5 class="light-blue darken-1">Be yourself, everyone else is already taken.</h5>
        <h5 class="orange lighten-4">We are all in the gutter, but some of us are looking at the stars.</h5>
        <h5 class="purple darken-3 white-text">To live is the rarest thing in the world. Most people exist, that is all.</h5>
        <h5 class="teal darken-2 yellow-text text-lighten-3">Experience is simply the name we give our mistakes.</h5>
        <h5 class="yellow lighten-3 purple-text text-darken-2">Always forgive your enemies - nothing annoys them so much.</h5>
      </div>

      <div class="container">
        <h5 class="center-align">Center alignment</h5>
        <h5 class="left-align">Left alignment</h5>
        <h5 class="right-align">Right alignment</h5>
      </div>

      <div class="container grey lighten-2 box valign-wrapper">
          <h5>Vertical alignment</h5>
      </div>

      <div class="container">
        <p class="truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec sem dictum, consectetur ex vitae, feugiat quam. Sed quis sodales urna. Donec tincidunt faucibus diam a ullamcorper.</p>
      </div>

      <div class="container">
        <h4>Buttons</h4>
        <a href="#" class="btn waves-effect waves-dark">Normal button</a>
        <a href="#" class="btn-small">Small button</a>
        <a href="#" class="btn-large">Large button</a>
        <a href="#" class="btn indigo waves-effect waves-light">Indigo button</a>
        <a href="#" class="btn disabled">Disabled button</a>
        <h4>Floating button</h4>
        <a href="#" class="btn-floating pulse pink"></a>
        <h4>Other elements</h4>
        <div class="btn">I am a div tag</div>
      </div>

      <div class="container">
        <h4>Icons</h4>
        <i class="material-icons red-text">error</i>
        <i class="material-icons yellow-text text-darken-2">warning</i>
        <i class="material-icons grey-text">cloud</i>
        <i class="material-icons light-blue-text">folder</i>

        <h4>Icons on Buttons</h4>
        <a href="#" class="btn indigo">
          <span>Send</span>
          <i class="material-icons right">send</i>
        </a>
        <a href="#" class="btn pink waves-effect waves-light">
          <span>Email</span>
          <i class="material-icons left">email</i>
        </a>

        <h4>Icons on Floating Buttons</h4>
        <a href="#" class="btn-floating light-blue">
          <i class="material-icons">add</i>
        </a>
        <a href="#" class="btn-floating red">
          <i class="material-icons">remove</i>
        </a>
        <a href="#" class="btn-floating orange pulse">
          <i class="material-icons">edit</i>
        </a>
      </div>

      <div class="container">
        <h4>Grids</h4>
        <div class="row">
          <div class="col s3">content</div>
          <div class="col s3">content</div>
          <div class="col s3">content</div>
          <div class="col s3">content</div>
        </div>
        <div class="row">
          <div class="col s6 m3">content</div>
          <div class="col s6 m3">content</div>
          <div class="col s6 m3">content</div>
          <div class="col s6 m3">content</div>
        </div>
        <div class="row">
          <div class="col s12 m6 l4 xl2">content</div>
          <div class="col s12 m6 l4 xl2">content</div>
          <div class="col s12 m6 l4 xl2">content</div>
          <div class="col s12 m6 l4 xl2">content</div>
          <div class="col s12 m6 l4 xl2">content</div>
          <div class="col s12 m6 l4 xl2">content</div>
        </div>
        <div class="row">
          <div class="col s12 m8">content</div>
          <div class="col s12 m4">content</div>
          <div class="col s12 m4">content</div>
          <div class="col s12 m8">content</div>
        </div>
      </div>

      <div class="container">
        <h4>Shadows & Depth</h4>
        <div class="row">
          <div class="col s2">
            <div></div>
          </div>
          <div class="col s2">
            <div class="z-depth-1"></div>
          </div>
          <div class="col s2">
            <div class="z-depth-2"></div>
          </div>
          <div class="col s2">
            <div class="z-depth-3"></div>
          </div>
          <div class="col s2">
            <div class="z-depth-4"></div>
          </div>
          <div class="col s2">
            <div class="z-depth-5"></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

