import React from 'react';
import Client from './Client.js';
import uspimg from './img/usp-campus1.jpg';

//classe de tela de adiministracao de uma parada
export class PerfilParada extends React.Component{
	constructor(props){
		super(props);//passar como props o nome, descricao, enigma e possossiveis respostas do percurso
		this.state = {
			percurso: props.aux.match.params.idPercurso,
			nome: props.nome,
			descricao: props.descricao,
			enigma: props.enigma,
			possiveisResp: props.possiveisResp,
		}
	}

	// Insere uma nova parada no banco por meio de uma chamada ao servidor com o modulo fetch
	inserirParada(){
		var x = document.getElementById("formDadosParada");
		var img = x.elements[0].value

		var percurso = this.state.percurso
		var nome = this.state.nome
		var desc = this.state.descricao
		var engm = this.state.enigma
		var resp = this.state.possiveisResp

		Client.addParada(percurso, nome, desc, engm, resp, img, res => {
			console.log(res.sucess)
			if(res.sucess === 'True'){
				console.log("Adicionou parada")
			} else {
				console.log("Erro ao tentar inserir parada")
			}
		})

		/*
		Vou deixar anotado aqui
		Caso precise manipular as variáveis para a interface
		*/
	}

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
		const url = "/editarPercurso/" + this.state.percurso
		return(
		<div>
			{/*render do perfil de uma parada no percurso*/}
			<div>
 	   		<div className="perfil_parada container">
					<div id="PerfilParada" className="grey lighten-5">
						<div>
							<form id="formDadosParada" action="#" encType="multipart/form-data" method="post">
								<img src={uspimg} className="responsive-img" alt="Imagem da parada" />
								{/*botao para trocar a imagem da parada*/}
								<div className="file-field input-field">
									<div className="btn red accent-4">
										<span>Trocar Imagem</span>
										<input type="file" id="imageField"/>
									</div>
									<div className="file-path-wrapper">
										<input className="file-path validate" type="text" />
									</div>
								</div>
								{/*campo de nome da parada*/}
								<label htmlFor="nameField" className="black-text"><h6>Nome</h6></label>
								<input value={this.state.nome} type="text" onChange={(e) => this.onChangeNome(e.target.nome)} id="nameField" />
								{/*campo de descricao da parada*/}
								<label htmlFor="descriptionField" className="black-text"><h6>Descrição</h6></label>
								<input value={this.state.descricao} type="text" onChange={(e) => this.onChangeDescricao(e.target.descricao)} id="descriptionField" />
								{/*campo de enigma da parada*/}
								<label htmlFor="enigmaField" className="black-text"><h6>Enigma da parada</h6></label>
								<input value={this.state.enigma} type="text" onChange={(e) => this.onChangeEnigma(e.target.enigma)} id="enigmaField" />
								{/*campo de respostas possiveis*/}
								<label htmlFor="answerField" className="black-text"><h6>Possíveis respostas da parada: (separadas por ';')</h6></label>
								<input value={this.state.possiveisResp} type="text" onChange={(e) => this.onChangepossiveisResp(e.target.possiveisResp)} id="answerField" />
							</form>
						</div>
						{/*botoes de cancelar e salvar*/}
						<a className="waves-effect waves-red btn-flat red-text text-accent-4" href={url} >Cancelar</a>
						<a className="waves-effect waves-green btn-flat green-text" onClick={() => this.inserirParada()} href={url}>Salvar</a>
					</div>
      	</div>
			</div>
		</div>
		);
	}
}
