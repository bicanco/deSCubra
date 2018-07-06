import React from 'react';
import uspPH from './img/usp-placeholder.jpg';
import { Link } from "react-router-dom";

//classe que gera a lista de cards da homePage do explorador
export class ListaCartasPercursos extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			percursos: props.percursos,
		};

	}

	renderCartaoPercurso(percursoObj){
		const url = "/explorar/Percurso/" + percursoObj[0]
		return (
				<div className="card">
					<div className="card-image">
						<img src={uspPH} />
						<span className="card-title">{percursoObj[0]}</span>
						<Link to={url} >
							<span className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">play_circle_filled</i></span>
						</Link>
					</div>

					<div className="card-content">
					<p>{percursoObj[1]}</p>
					</div>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		const aux = this.props.percursos.map((percursos) => <div className="col s12 m6">{this.renderCartaoPercurso(percursos)}</div>);
		//console.log();
		return (
			<div className="row">
				{/*render da lista de percursos */}
				{aux}
			</div>
		);
	}
}
