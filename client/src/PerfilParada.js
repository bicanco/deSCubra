import React from 'react';
import Connection from './connectionFactory';

export class PerfilParada extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}
		document.addEventListener('DOMContentLoaded', function() {
    		var elems = document.querySelectorAll('.modal');
			var options = {};
			M.Modal.init(elems, options);
 		});	
	}

	inserirParada(){
		var conn = new Connection.createDBConnection();
		var x = document.getElementById("formDadosParada");]

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

		const query = {
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

	render(){
		return(
		<div class="red accent-4">
 	     		<div className="perfil_parada">
					<div id="modalIncluirNovaParada" class="modal">
						<div class="modal-content">
							<form id="formDadosParada" action="#" enctype="multipart/form-data" method="post">
								<p>Imagem da parada:</p>
								<div class="file-field input-field">
									<div class="btn">
										<span>Imagem</span>
										<input type="file" />
									</div>
									<div class="file-path-wrapper">
										<input class="file-path validate" type="text" />
									</div>
								</div>
								<p>Insira o nome da parada:</p>
								<input type="text" />
								<p>Insira a descrição da parada:</p>
								<input type="text" />
								<p>Insira o enigma da parada:</p>
								<input type="text" />
								<p>Insira as possíveis respostas da parada: (separe-as por ';')</p>
								<input type="text" />
							</form>
						</div>
						<div class="modal-footer">
							<a href="#!" class="modal-close waves-effect waves-green btn-flat red-text">Cancelar</a>
							<button class="modal-close waves-effect waves-green btn-flat green-text" onClick={() => this.inserirParada()}>Inserir</button>
						</div>
					</div>
      			</div>
			</div>
		</div>
		);
	}
}
