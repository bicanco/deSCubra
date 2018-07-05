import React from 'react';
import {ParadasPercurso} from './ParadasPercurso.js';
import M from 'materialize-css';
import axios from 'axios';
import Client from './Client.js'

export class PerfilPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nome: props.nome,
			descricao: props.descricao,
			imgSrc: props.imgSrc,
			paradas: [1,2,3,4,5,6],
		}
		//inicializacao de elementos do materialize
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
		var options = {};
		M.Modal.init(elems, options);
 		 });
	}

	stringRenderFotoPerfil(foto){
		//composicao do elemento html da foto do percurso
		return "<img className=\"responsive-img\" src=\""+foto+"\" alt=\"Imagem do Percurso\" />";
	}

	renderFotoPerfil(foto){
		//render da foto do percurso
		return(
			<img className="responsive-img" src={foto} alt="Imagem do Percurso" />
		);
	}

	stringRenderNomePerfil(name){
		//composicao do elemento html do nome do Percurso
		return "<h1 className=\"white-text\">"+name+"    <button data-target=\"modalTrocarNomePercurso\" className=\"btn modal-trigger red\"><i className=\"material-icons\">create</i></button></h1>";
	}

	renderNomePerfil(name){
		//render do nome do percurso
		return(
			<h1 className="black-text">{name}    <button data-target="modalTrocarNomePercurso" className="btn modal-trigger red"><i className="material-icons">create</i></button></h1>
		);
	}

	mudarPerfilPercurso(){
		//funcao que altera os elementos a html quando os dados sao atualizados
		const nome_prev = this.state.nome;
		var x = document.getElementById("formTrocarPerfilPercurso");
		var f = document.getElementById("FotoPercursoPerfilPercurso");
		var n = document.getElementById("NomePercursoPerfilPercurso");

		if(x.elements[0].value !== ""){
			console.log(this.state.imgSrc);
			f.innerHTML = this.stringRenderFotoPerfil(x.elements[0].value);
			this.state.imgSrc = x.elements[0].value;
			//axios.post('http://localhost:3001/file-upload', this.state.imgSrc);
		}

		if(x.elements[2].value !== ""){
			n.innerHTML = this.stringRenderNomePerfil(x.elements[2].value);
			this.state.nome = x.elements[2].value;
		}

		Client.addPercurso(nome_prev, this.state.nome, this.state.descricao, this.state.imgSrc, res => {
			console.log(res.sucess);
			if(res.sucess === 'True'){
				console.log("Adicionou/Alterou Percurso");
			} else {
				console.log("Erro ao tentar adicionar/alterar percurso");
			}
		})
	}

	render(){
		return(
			<div class="white">
 	     		<div className="perfil_percurso container" >
 	     			<div align='center'>
   	    			 	<div id="FotoPercursoPerfilPercurso">{this.renderFotoPerfil(this.state.imgSrc)}</div>
						<div id="NomePercursoPerfilPercurso">{this.renderNomePerfil(this.state.name)}</div>
						<div id="modalTrocarNomePercurso" className="modal">
							{/*mensagem a aparecer ao selecionar o botao que troca as informcaoes do percurso*/}
							<div className="modal-content">
								{/*conteudo da mensagem*/}
								<form id="formTrocarPerfilPercurso" action="#" encType="multipart/form-data" method="post">
									<p>Trocar imagem:</p>
									<div className="file-field input-field">
										<div className="btn">
											<span>Imagem</span>
											<input type="file" />
										</div>
										<div className="file-path-wrapper">
											<input className="file-path validate" type="text" />
										</div>
									</div>
									<p>Definir novo nome para o percurso:</p>
									<input type="text" />
								</form>
							</div>
							<div className="modal-footer">
								{/*botoes na parte inferior da mensagem*/}
								<a href="#!" className="modal-close waves-effect waves-green btn-flat red-text">Cancelar</a>
								<button  className="modal-close waves-effect waves-green btn-flat green-text" onClick={() => this.mudarPerfilPercurso()}>Trocar</button>
							</div>
						</div>
						<div align="center">
							<a className="btn red"><i className="material-icons left">add</i>ADICIONAR PARADA</a>
						</div>
      				</div>
					{/*render da colecao das paradas desse percurso*/}
      				<ParadasPercurso paradas={this.state.paradas} />
      				<div align='center'>
						{/*botoes de Salvar e Remover Percurso*/}
						<button className="btn-flat green-text">Salvar</button> <button data-target="modalRemoverPercurso" className="btn-flat modal-trigger red-text">Remover Percurso</button>
						<p><br class="red" /></p>
						<div id="modalRemoverPercurso" className="modal">
							{/*mensagem a aparecer quando deseja-se remover um percurso*/}
							<div className="modal-content">
								{/*Conteudo da mensagem*/}
	    						<h4>Tem certeza que deseja remover?</h4>
								<p>Digite o nome do percurso para removê-lo:</p>
								<form action="#">
									<input type="text" />
								</form>
	   						</div>
    						<div className="modal-footer">
								{/*botoes na parte inferior da mensagem*/}
								<a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancelar</a>
								<a href="#!" className="modal-close waves-effect waves-green btn-flat red-text">Remover</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
