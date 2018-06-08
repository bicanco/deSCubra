import React from 'react';
import {Navbar,Button} from 'react-materialize';

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
			<Navbar brand={i} right>
				<Button color="#ffffff">+</Button>
				<Button>-</Button>
			</Navbar>
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