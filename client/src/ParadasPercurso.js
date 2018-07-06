import React from 'react';
import Client from './Client.js'

export class ParadasPercurso extends React.Component{
	constructor(props){
		super(props);//passar como props um vetor com os nomes das paradas do percurso
		this.state ={
			paradas: ["test"],
		};
	}

	removerParada(paradaRem){
		Client.removeParada(paradaRem, res => {
			//console.log(res.sucess);
			if(res.sucess === 'True'){
				console.log("Removeu Parada");
			}else{
				console.log("Erro ao tentar remover Parada");
			}
		});
	}

	renderParada(paradaObj){
		return (
			<div align="left">
				{/*render de uma parada de um percurso*/}
				{paradaObj[0]}<a href="#" onClick = {() => this.removerParada(paradaObj[0])} class="secondary-content grey lighten-5"><i class="material-icons green-text text-darken-4">delete</i></a>
			</div>
		);
	}

	render(){
		console.log(this.props.paradas)
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		var aux = <p>Sem paradas cadastradas.</p>
		if(this.props.paradas != null){
			aux = this.props.paradas.map((paradas) => <li class="collection-item">{this.renderParada(paradas)}</li>);
		}
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
