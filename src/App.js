import React, { Component } from 'react';
import logo from './images1.png';
import {PerfilPercurso} from './PerfilPercurso';
import './App.css';
import M from 'materialize-css';

class App extends Component {
	constructor(props){
		super(props);
//		document.addEventListener('DOMContentLoaded', function() {
//		var elems = document.querySelectorAll('.modal');
//	 	var instances = M.Modal.init(elems, options);
//	 	 });
		M.AutoInit();
	}
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <PerfilPercurso imgSrc={logo} name='Percurso' />
        </p>
      </div>
    );
  }
}

export default App;
