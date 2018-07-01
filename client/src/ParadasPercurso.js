import React from 'react';

export class ParadasPercurso extends React.Component{
	constructor(props){
		super(props);//passar como props um vetor com os nomes das paradas do percurso
		this.state ={
			paradas: props.paradas,
		};
	}

	renderParada(i){
		return (
			<div align="left">
				{/*render de uma parada de um percurso*/}
				{i}<div align="right"><button class="btn red"><i class="material-icons">remove</i></button></div>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		const aux = this.state.paradas.map((paradas) => <li class="collection-item grey lighten-5">{this.renderParada(paradas)}</li>);
		return(
			<ul class="collection">
				{/*render da lista de paradas do percurso*/}
				{aux}
			</ul>
		);
	}
}
