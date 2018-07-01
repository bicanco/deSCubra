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
					<div id="PerfilParada" class="red lighten-1">
						<div>
							<form id="formDadosParada" action="#" enctype="multipart/form-data" method="post">
								<img class="responsive-img" alt="Imagem da parada" />
								{/*botao para trocar a imagem da parada*/}
								<div class="file-field input-field">
									<div class="btn red accent-4">
										<span>Trocar Imagem</span>
										<input type="file" />
									</div>
									<div class="file-path-wrapper">
										<input class="file-path validate" type="text" />
									</div>
								</div>
								{/*campo de nome da parada*/}
								<label for="nameField" class="black-text">Nome:</label>
								<input value={this.state.nome} type="text" onChange={(e) => this.onChangeNome(e.target.nome)} id="nameField" />
								{/*campo de descricao da parada*/}
								<label for="descriptionField" class="black-text">Descrição:</label>
								<input value={this.state.descricao} type="text" onChange={(e) => this.onChangeDescricao(e.target.descricao)} id="descriptionField" />
								{/*campo de enigma da parada*/}
								<label for="enigmaField" class="black-text">Enigma da parada:</label>
								<input value={this.state.enigma} type="text" onChange={(e) => this.onChangeEnigma(e.target.enigma)} id="enigmaField" />
								{/*campo de respostas possiveis*/}
								<label for="answerField" class="black-text">Possíveis respostas da parada: (separadas por ';')</label>
								<input value={this.state.possiveisResp} type="text" onChange={(e) => this.onChangepossiveisResp(e.target.possiveisResp)} id="answerField" />
							</form>
						</div>
						{/*botoes de cancelar e salvar*/}
						<button class="waves-effect waves-red btn-flat red-text text-accent-4">Cancelar</button>
						<button class="waves-effect waves-green btn-flat green-text">Salvar</button>
					</div>
      	</div>
			</div>
		</div>
		);
	}
}
