import React from 'react';
import {ParadasPercurso} from './ParadasPercurso';
import {Row,Input} from 'materialize-css';
import M from 'materialize-css';

export class PerfilPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			paradas: [1,2,3,4,5,6],
		}
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
		var options = {};
		var instances = M.Modal.init(elems, options);
 		 });
	}
	render(){
		return(
		<header sylte={{backgroundColor: 'red'}}>
 	     		<div className="perfil_percurso" >
 	     			<div align='center'>
   	    			 	<img src={this.props.imgSrc} alt="Imagem do Percurso" />
      					<h1>{this.props.name}</h1>
      				</div>
      				<ParadasPercurso paradas={this.state.paradas} />
      				<div align='center'>
					<button data-target="modal1" class="btn modal-trigger">Modal</button>
					<div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
				</div>
			</div>
		</header>
		);
	}
}
