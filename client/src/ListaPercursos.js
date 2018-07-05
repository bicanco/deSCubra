import React from 'react';
import { Link } from "react-router-dom";
import Client from './Client.js';

export class ListaPercursos extends React.Component{
	constructor(props){
		super(props);//passar como props um vetor com os nomes das paradas do percurso
		this.state ={
			percursos: props.percursos,
		};
	}

	renderLinhaPercurso(i){
		console.log(i)
		const url = "/editarPercurso/"+i
		return (
			<div>
				{/*render de um percurso, com botao para editar*/}
<<<<<<< HEAD
				<h5 className="white-text">{i}</h5>
        <div align="right">
					<Link to={url}>
						<button className="btn red">
							<i className="material-icons">edit</i>
						</button>
=======
				{i}<Link to={url}><a class="secondary-content grey lighten-5"><i class="material-icons green-text text-darken-4">edit</i></a>
>>>>>>> 2a4c9e547781939e9800643cfa5afbbba4746412
					</Link>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		const aux = this.state.percursos.map((percursos) => <li class="collection-item  grey lighten-5">{this.renderLinhaPercurso(percursos)}</li>);
		return(
			<div>
<<<<<<< HEAD
				<ul className="collection">
					{/*render da lista de percursos */}
					{aux}
				</ul>
=======
				<div class="row">
					<ul class="collection col s12 m4 offset-m4 l4 offset-l4">
						{/*render da lista de percursos */}
						{aux}
					</ul>
				</div>
>>>>>>> 2a4c9e547781939e9800643cfa5afbbba4746412
			</div>
		);
	}
}
