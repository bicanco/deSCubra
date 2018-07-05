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
				{i}<a href="#!" class="secondary-content grey lighten-5"><i class="material-icons green-text text-darken-4">edit</i></a>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		const aux = this.state.paradas.map((paradas) => <li class="collection-item">{this.renderParada(paradas)}</li>);
		return(
			<div class="row">
				<ul class="collection col s12 m6 offset-m3 l6 offset-l3">
				{/*render da lista de paradas do percurso*/}
				{aux}
				</ul>
			</div>
		);
	}
}
