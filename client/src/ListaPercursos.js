import React from 'react';
import { Link } from "react-router-dom";

export class ListaPercursos extends React.Component{
	constructor(props){
		super(props);//passar como props um vetor com os nomes das paradas do percurso
		this.state ={
			percursos: props.percursos,
		};
	}

	renderLinhaPercurso(i){
		const url = "/editarPercurso/"+i
		return (
			<div>
				{/*render de um percurso, com botao para editar*/}
				{i}<Link to={url}><a class="secondary-content grey lighten-5"><i class="material-icons green-text text-darken-4">edit</i></a>
					</Link>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		const aux = this.state.percursos.map((percursos) => <li class="collection-item">{this.renderLinhaPercurso(percursos)}</li>);
		return(
			<div>
				<h3>Administração de Percursos</h3>
				<div class="row">
					<ul class="collection col s12 m4 offset-m4 l4 offset-l4">
						{/*render da lista de percursos */}
						{aux}
					</ul>
				</div>
			</div>
		);
	}
}
