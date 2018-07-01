import React from 'react';
//import Connection from './connectionFactory';

export class PerfilParada extends React.Component{
	constructor(props){
		super(props);//passar como props o nome, descricao, enigma e possossiveis respostas do percurso
		this.state = {
			nome: 'nom',
			descricao: 'desc',
			enigma: 'enigma',
			possiveisResp: 'poss',
		}
	}

/*
	inserirParada(){
		var conn = new Connection.createDBConnection();
		var x = document.getElementById("formDadosParada");

		conn.connect(function(err){
		  if(err) return console.log(err);
		  console.log('conectou!');
		})

		var img = x.elements[0].value;
		var name = x.elements[1].value;
		var desc = x.elements[2].value;
		var engm = x.elements[3].value;
		var answer = x.elements[4].value;

		/*
		Vou deixar anotado aqui
		Caso precise manipular as variáveis para a interface
		*/

/*		const query = {
		  	text: 'INSERT INTO PARADA(nome, descricao, enigma, respostas) VALUES ($1, $2, $3, $4)',
		  	values: [name, desc, engm, answer],
		}

		client.query(query, (err, res) => {
		  	if (err) {
		  	  	console.log(err.stack)
		  	} else {
		    	console.log(res.rows[0])
		  	}
		})

		client.query(query)
		  	.then(res => console.log(res.rows[0]))
		  	.catch(e => console.error(e.stack))
	}
*/
	onChangeNome = (nome) =>{//mudar o valor no campo nome
		this.setState({nome})
	}

	onChangeDescricao = (descricao) =>{//mudar o valor no campo descricao
		this.setState({descricao})
	}

	onChangeEnigma = (enigma) =>{//mudar o valor no campo enigma
		this.setState({enigma})
	}

	onChangepossiveisResp = (possiveisResp) =>{//mudar o valor no campo possiveis respostas
		this.setState({possiveisResp})
	}

	render(){
		return(
		<div>
			{/*render do perfil de uma parada no percurso*/}
			<div>
 	   		<div className="perfil_parada">
					<div id="PerfilParada" className="grey lighten-5">
						<div>
							<form id="formDadosParada" action="#" encType="multipart/form-data" method="post">
								<img className="responsive-img" alt="Imagem da parada" />
								{/*botao para trocar a imagem da parada*/}
								<div className="file-field input-field">
									<div className="btn red accent-4">
										<span>Trocar Imagem</span>
										<input type="file" />
									</div>
									<div className="file-path-wrapper">
										<input className="file-path validate" type="text" />
									</div>
								</div>
								{/*campo de nome da parada*/}
								<label htmlFor="nameField" className="black-text">Nome:</label>
								<input value={this.state.nome} type="text" onChange={(e) => this.onChangeNome(e.target.nome)} id="nameField" />
								{/*campo de descricao da parada*/}
								<label htmlFor="descriptionField" className="black-text">Descrição:</label>
								<input value={this.state.descricao} type="text" onChange={(e) => this.onChangeDescricao(e.target.descricao)} id="descriptionField" />
								{/*campo de enigma da parada*/}
								<label htmlFor="enigmaField" className="black-text">Enigma da parada:</label>
								<input value={this.state.enigma} type="text" onChange={(e) => this.onChangeEnigma(e.target.enigma)} id="enigmaField" />
								{/*campo de respostas possiveis*/}
								<label htmlFor="answerField" className="black-text">Possíveis respostas da parada: (separadas por ';')</label>
								<input value={this.state.possiveisResp} type="text" onChange={(e) => this.onChangepossiveisResp(e.target.possiveisResp)} id="answerField" />
							</form>
						</div>
						{/*botoes de cancelar e salvar*/}
						<button className="waves-effect waves-red btn-flat red-text text-accent-4">Cancelar</button>
						<button className="waves-effect waves-green btn-flat green-text">Salvar</button>
					</div>
      	</div>
			</div>
		</div>
		);
	}
}
