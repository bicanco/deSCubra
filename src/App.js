import React, { Component } from 'react';
import logo from './images1.png';
import {PerfilPercurso} from './PerfilPercurso';
import './App.css';
import M from 'materialize-css';

class App extends Component {
	constructor(props){
		super(props);
		M.AutoInit();
	}
  render() {
    return (
	<header>
      		<div className="App" style={{backgroundColor: 'red'}}>
       		 <p className="App-intro">
         	 <PerfilPercurso imgSrc={logo} name='Percurso' />
        	</p>
     		 </div>
	</header>
    );
  }
}

export default App;
