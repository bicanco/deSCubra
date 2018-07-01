INSERT INTO ADMINISTRADOR VALUES ('323DA4752E086A347E3FE58236E26357315F76ED1F6DA5D385D30A9D8C3FA169', 'C6AAD61D3218F8D7CABA296C24A23B1C56E21D83704324B534B269D4EE61B4E5');

INSERT INTO PERCURSO VALUES ('Percurso de Teste 1', 'Esse é um percurso de teste. Ele está sendo inserido diretamente no banco de dados.', 'images/percursos/teste1.png');
INSERT INTO PERCURSO VALUES ('Percurso de Teste 2', 'Eu queria ter algo legal para escrever aqui, mas vou ensinar você a terminar uma frase. Quando achar que está bom, escreva um ponto.', 'images/percursos/teste2.png');

INSERT INTO PARADA VALUES ('Percurso de Teste 1', 0, 'Parada 1', '1+1=', '2', 'images/paradas/1-1.png');
INSERT INTO PARADA VALUES ('Percurso de Teste 1', 1, 'Parada 2', '1+1=', '2', 'images/paradas/1-2.png');
INSERT INTO PARADA VALUES ('Percurso de Teste 1', 2, 'Parada 3', '1+1=', '2', 'images/paradas/1-3.png');
INSERT INTO PARADA VALUES ('Percurso de Teste 2', 0, 'Parada 1', '2+2=', '5', 'images/paradas/2-1.png');

INSERT INTO EXPLORADOR VALUES ('jones@lucasarts.com', 'Indiana Jones');
INSERT INTO EXPLORADOR VALUES ('croft@ea.com', 'Lara Croft');

INSERT INTO STATUS VALUES ('Percurso de Teste 1', 'croft@ea.com', 2);
INSERT INTO STATUS VALUES ('Percurso de Teste 2', 'jones@lucasarts.com', 1);

COMMIT;
