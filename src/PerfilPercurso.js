import React from 'react';
import {ParadasPercurso} from './ParadasPercurso';
import {Button,Modal,Row,Input} from 'react-materialize';

export class PerfilPercurso extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			paradas: [1,2,3,4,5,6],
		}
	}
	render(){
		return(
		<header sylte={{backgroundColor: 'red'}}>
 	     	<div className="perfil_percurso" >
 	     		<div align='center'>
   	    		 	<img src={this.props.imgSrc} alt="Imagem do Percurso" />
      				<h1>{this.props.name}</h1>
      			</div>
      			<ParadasPercurso paradas={this.state.paradas} />
      			<div align='center'>
      				<Button>Nova Parada</Button>
      				<Modal header='Tem certeza que deseja remover?'
      					trigger={<Button>Remover Percurso</Button>}>
      					<p>Digite o nome do percurso para removê-lo</p>
      					<Row>
      						<Input s={12} type='textarea' />
						</Row>
    	  			</Modal>
      			</div>
      		</div>
		</header>
		);
	}
}
