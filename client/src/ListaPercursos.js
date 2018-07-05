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
			<div align="left">
				{/*render de um percurso, com botao para editar*/}
				<h5 className="white-text">{i}</h5>
        <div align="right">
					<Link to={url}>
						<button className="btn red">
							<i className="material-icons">edit</i>
						</button>
					</Link>
				</div>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		const aux = this.state.percursos.map((percursos) => <li class="collection-item red lighten-1">{this.renderLinhaPercurso(percursos)}</li>);
		return(
			<div>
				<ul className="collection">
					{/*render da lista de percursos */}
					{aux}
				</ul>
			</div>
		);
	}
}
