import React from 'react';
import {a} from 'materialize-css';

export class ParadasPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			paradas: props.paradas,
		};
	}
	renderParada(i){
		return (
			<div>
				<a>+</a>
				<a>-</a>
			</div>
		);
	}

	render(){
		const aux = this.state.paradas.map((paradas) => <li>{this.renderParada(paradas)}</li>);
		return(
			<ul>
				{aux}
			</ul>
		);
	}
}
