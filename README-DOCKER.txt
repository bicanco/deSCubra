RODAR 1 VEZ PARA FAZER A BUILD
*SE INSTALAR LIBS NOVAS, RODAR DE NOVO*
docker-compose up --build
OU ISSO PARA UM CONTAINER ESPECIFICO
docker build -t descubra .

RODAR CONTAINERES TODOS
docker-compose up

RODAR O CONTAINER ESPECIFICO
docker run -d -p 3000:3000 descubra

SAIR DO CONTAINER
	- SE RODOU COM -d
	docker rm descubra
	- SE RODOU SEM -d
	ctrl + D

MODULOS EXTRAS JA INSTALADOS NO NODE
MaterializeReact https://materializecss.com/getting-started.html
Interface Postrgres https://node-postgres.com/
	- Quando for conectar no banco, colocar 'db' como host, pois ja esta linkado com o container do postgres

------------------------------------

RODAR CONTAINER ESPECIFICANDO O NOME
docker run --name nome_que_voce_quer nome_da_imagem(ex:postgres:10)

RODAR LINKANDO 2 CONTAINERES
docker run -it --link nome_do_container_a_ser_linkado:nome_dado nome_da_imagem