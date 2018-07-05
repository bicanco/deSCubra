import React from 'react';
import {ParadasPercurso} from './ParadasPercurso.js';
import M from 'materialize-css';
import axios from 'axios';
import Client from './Client.js'

export class PerfilPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nome: null,
			descricao: null,
			imgSrc: null,
			paradas: [1, 2, 3, 4, 5],
		}
		//inicializacao de elementos do materialize
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
				var options = {};
				M.Modal.init(elems, options);
 		 });
	}

	/*
	componentDidMount(){
		Client.perfilPercurso(this.state.nome, res => {
			console.log(res)
			if(res.sucess){
				console.log("Informações do percurso obtidas")
			} else{
				console.log("Informações não encontradas")
			}
		})
	}*/

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

	renderNomePerfil(name){
		//render do nome do percurso
		return(
			<h1><p><div id="NomePercursoPerfilPercurso">{name}</div><button data-target="modalTrocarNomePercurso" className="btn modal-trigger red"><i className="material-icons">create</i></button></p></h1>
		);
	}

	mudarPerfilPercurso(){
		//funcao que altera os elementos a html quando os dados sao atualizados
		const nome_prev = this.state.nome;
		var x = document.getElementById("formTrocarPerfilPercurso");
		var f = document.getElementById("FotoPercursoPerfilPercurso");
		var n = document.getElementById("NomePercursoPerfilPercurso");

		if(x.elements[0].value !== ""){
			f.innerHTML = this.stringRenderFotoPerfil(x.elements[0].value)
			this.state.imgSrc = x.elements[0].value;
		}

		if(x.elements[2].value !== ""){
			n.innerHTML = x.elements[2].value;
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

	removerPercurso(){
		var elem = document.getElementById("formRemoverPercurso");
		var percursoARemover = elem.elements[0].value;
		if(percursoARemover === this.state.nome){
			console.log("remover");
			Client.removePercurso(this.state.nome, res => {
				console.log(res.sucess);
				if(res.sucess === 'True'){
					console.log("Removeu Percurso");
				}else{
					console.log("Erro ao tentar remover Percurso");
				}
			});
		}else{
			console.log("não remover");
		}
	}

	render(){
		return(
			<div class="white">
 	     		<div className="perfil_percurso container" >
 	     			<div align='center'>
   	    			 	<div id="FotoPercursoPerfilPercurso">{this.renderFotoPerfil(this.state.imgSrc)}</div>
						<div>{this.renderNomePerfil(this.state.nome)}</div>
						<div id="modalTrocarNomePercurso" className="modal">
							{/*mensagem a aparecer ao selecionar o botao que troca as informcaoes do percurso*/}
							<div className="modal-content">
								{/*conteudo da mensagem*/}
								<form id="formTrocarPerfilPercurso" action="#" encType="multipart/form-data" method="post">
									<p>Trocar imagem:</p>
									<div className="file-field input-field">
										<div className="btn">
											<span>Imagem</span>
											<input type="file"/>
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
								<form id="formRemoverPercurso" action="#">
									<input type="text" />
								</form>
	   						</div>
    						<div className="modal-footer">
								{/*botoes na parte inferior da mensagem*/}
								<button className="modal-close waves-effect waves-green btn-flat">Cancelar</button>
								<button className="waves-effect waves-red btn-flat red-text" onClick={() => this.removerPercurso()}>Remover</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
