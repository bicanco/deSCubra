import React from 'react';
import uspPH from './img/usp-placeholder.jpg';
import { Link } from "react-router-dom";

export class ListaCartasPercursos extends React.Component{
	constructor(props){
		super(props);//passar como props um vetor com os dados das paradas
		this.state ={
			percursos: props.percursos,
		};

		//console.log(this.state.percursos);
	}

	renderCartaoPercurso(percursoObj){
		const url = "/explorar/Percurso/" + percursoObj[0]
		return (
				<div className="card">
					<div className="card-image">
						<img src={uspPH} alt="Imagem do percurso" />
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
