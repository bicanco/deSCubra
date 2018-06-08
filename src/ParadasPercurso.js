import React from 'react';

export class ParadasPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			paradas: props.paradas,
		};
	}
	renderParada(i){
		return (
			<div align="left">
				{i}<div align="right"><button class="btn green"><i class="material-icons">add</i></button> <button class="btn red"><i class="material-icons">remove</i></button></div>
			</div>
		);
	}

	render(){
		const aux = this.state.paradas.map((paradas) => <li class="collection-item red lighten-1">{this.renderParada(paradas)}</li>);
		return(
			<ul class="collection">
				{aux}
			</ul>
		);
	}
}
