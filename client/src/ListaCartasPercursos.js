import React from 'react';
import uspPH from './img/usp-placeholder.jpg';

export class ListaCartasPercursos extends React.Component{
	constructor(props){
		super(props);//passar como props um vetor com os dados das paradas
		this.state ={
			percursos: props.percursos,
		};

		console.log(this.state.percursos);
	}

	renderCartaoPercurso(percursoObj){
		const url = "/explorar/Percurso/" + percursoObj[0]
		return (
				<div class="card">
					<div class="card-image">
						<img src={uspPH} />
						<span class="card-title">{percursoObj[0]}</span>
						<a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">play_circle_filled</i></a>
					</div>

					<div class="card-content">
					<p>{percursoObj[1]}</p>
					</div>
			</div>
		);
	}

	render(){
		//transformando o vetor de paradas em uma colecao de elementos na pagina
		const aux = this.props.percursos.map((percursos) => <div class="col s12 m6">{this.renderCartaoPercurso(percursos)}</div>);
		console.log();
		return (
			<div className="row">
				{/*render da lista de percursos */}
				{aux}
			</div>
		);
	}
}
