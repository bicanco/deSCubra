import React from 'react';
import {ParadasPercurso} from './ParadasPercurso';
import M from 'materialize-css';

export class PerfilPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: props.name,
			imgSrc: props.imgSrc,
			paradas: [1,2,3,4,5,6],
		}
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
		var options = {};
		M.Modal.init(elems, options);
 		 });
	}

	stringRenderFotoPerfil(foto){
		return "<img class=\"responsive-img\" src=\""+foto+"\" alt=\"Imagem do Percurso\" />";

	}

	renderFotoPerfil(foto){
		return(
			<img class="responsive-img" src={foto} alt="Imagem do Percurso" />
		);
	}

	stringRenderNomePerfil(name){
		return "<h1 class=\"white-text\">"+name+"    <button data-target=\"modalTrocarNomePercurso\" class=\"btn modal-trigger red\"><i class=\"material-icons\">create</i></button></h1>";

	}
	
	renderNomePerfil(name){
		return(
			<h1 class="white-text">{name}    <button data-target="modalTrocarNomePercurso" class="btn modal-trigger red"><i class="material-icons">create</i></button></h1>
		);
	}

	mudarPerfilPercurso(){
		var x = document.getElementById("formTrocarPerfilPercurso");
		var f = document.getElementById("FotoPercursoPerfilPercurso");
		var n = document.getElementById("NomePercursoPerfilPercurso");
		if(x.elements[0].value !== ""){
//			f.innerHTML = this.stringRenderFotoPerfil(x.elements[0].value);
			this.state.imgSrc = x.elemets[0].value;
		}
		if(x.elements[2].value !== ""){
			n.innerHTML = this.stringRenderNomePerfil(x.elements[2].value);
		}
	}

	render(){
		return(
		<div class="red accent-4">
 	     		<div className="perfil_percurso" >
 	     			<div align='center'>
   	    			 	<div id="FotoPercursoPerfilPercurso">{this.renderFotoPerfil(this.state.imgSrc)}</div>
					<div id="NomePercursoPerfilPercurso">{this.renderNomePerfil(this.state.name)}</div>
					<div id="modalTrocarNomePercurso" class="modal">
						<div class="modal-content">
							<form id="formTrocarPerfilPercurso" action="#" enctype="multipart/form-data" method="post">
								<p>Trocar imagem:</p>
								<div class="file-field input-field">
									<div class="btn">
										<span>Imagem</span>
										<input type="file" />
									</div>
									<div class="file-path-wrapper">
										<input class="file-path validate" type="text" />
									</div>
								</div>
								<p>Definir novo nome para o percurso:</p>
								<input type="text" />
							</form>
						</div>
						<div class="modal-footer">
							<a href="#!" class="modal-close waves-effect waves-green btn-flat red-text">Cancelar</a>
							<button  class="modal-close waves-effect waves-green btn-flat green-text" onClick={() => this.mudarPerfilPercurso()}>Trocar</button>
						</div>
					</div>
      				</div>
				<div align="right">
					<a class="btn-floating red"><i class="material-icons">add</i></a>
				</div>
      				<ParadasPercurso paradas={this.state.paradas} />
      				<div align='center'>
					<button class="btn green">Nova Parada</button>    <button data-target="modalRemoverPercurso" class="btn modal-trigger red">Remover Percurso</button>
					<div id="modalRemoverPercurso" class="modal">
						<div class="modal-content">
	    						<h4>Tem certeza que deseja remover?</h4>
							<p>Digite o nome do percurso para removê-lo:</p>
							<form action="#">
								<input type="text" />
							</form>
	   					</div>
    						<div class="modal-footer">
							<a href="#!" class="modal-close waves-effect waves-green btn-flat">Cancelar</a>
							<a href="#!" class="modal-close waves-effect waves-green btn-flat red-text">Remover</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}
