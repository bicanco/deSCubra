import React from 'react';
import Client from './Client.js'

export class ParadasPercurso extends React.Component{
	constructor(props){
		super(props);//passar como props um vetor com os nomes das paradas do percurso
		this.state ={
			paradas: props.paradas,
		};
	}

	removerParada(i){
		var paradaRem = this.state.paradas[i-1];
		console.log(paradaRem);
		Client.removeParada(paradaRem, res => {
			console.log(res.sucess);
			if(res.sucess === 'True'){
				console.log("Removeu Parada");
			}else{
				console.log("Erro ao tentar remover Parada");
			}
		});
	}

	renderParada(i){
		return (
			<div align="left">
				{/*render de uma parada de um percurso*/}
				{i}<a href="#!" onClick = {() => this.removerParada(i)} className="secondary-content grey lighten-5"><i className="material-icons green-text text-darken-4">delete</i></a>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		const aux = this.state.paradas.map((paradas) => <li className="collection-item">{this.renderParada(paradas)}</li>);
		return(
			<div className="row">
				<ul className="collection col s12 m6 offset-m3 l6 offset-l3">
				{/*render da lista de paradas do percurso*/}
				{aux}
				</ul>
			</div>
		);
	}
}
