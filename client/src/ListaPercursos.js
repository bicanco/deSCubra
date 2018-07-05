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

	componentDidMount(){
		console.log("mounted"+this.state.percursos)
	}

	renderLinhaPercurso(i){
		console.log(i[0])
		const url = "/editarPercurso/"+i[0]
		return (
			<div>
				{/*render de um percurso, com botao para editar*/}
				{i[0]}<a href={url} className="secondary-content"><i className="material-icons green-text text-darken-4">edit</i></a>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina

		console.log('renderizando'+this.state.percursos)
		var aux = <p>Sem percursos cadastrados.</p>
		if(this.state.percursos != []){
			aux = this.state.percursos.map((percursos) => <li className="collection-item">{this.renderLinhaPercurso(percursos)}</li>);
		}
		return(
			<div>
				<div className="row">
					<ul className="collection col s12 m4 offset-m4 l4 offset-l4">
						{/*render da lista de percursos */}
						{aux}
					</ul>
				</div>
			</div>
		);
	}
}
