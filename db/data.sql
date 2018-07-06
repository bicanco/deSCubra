INSERT INTO ADMINISTRADOR VALUES ('c70b5dd9ebfb6f51d09d4132b7170c9d20750a7852f00680f65658f0310e810056e6763c34c9a00b0e940076f54495c169fc2302cceb312039271c43469507dc', '48149519ed0be8360db4f4ce1c3d3bbd20e6ca8054cf47fa42c01729058880aaf4873ddf1945ccd324061de378bf5d56516dd8bba49727e23327248fba35e5a7');

INSERT INTO PERCURSO VALUES ('Percurso de Teste 1', 'Esse é um percurso de teste. Ele está sendo inserido diretamente no banco de dados.', 'images/percursos/teste1.png');
INSERT INTO PERCURSO VALUES ('Percurso de Teste 2', 'Eu queria ter algo legal para escrever aqui, mas vou ensinar você a terminar uma frase. Quando achar que está bom, escreva um ponto.', 'images/percursos/teste2.png');

INSERT INTO PARADA VALUES ('Percurso de Teste 1', 0, '1', 'Parada 1', '1+1=', '2', 'images/paradas/1-1.png');
INSERT INTO PARADA VALUES ('Percurso de Teste 1', 1, '2', 'Parada 2', '1+1=', '2', 'images/paradas/1-2.png');
INSERT INTO PARADA VALUES ('Percurso de Teste 1', 2, '3', 'Parada 3', '1+1=', '2', 'images/paradas/1-3.png');
INSERT INTO PARADA VALUES ('Percurso de Teste 2', 0, '4', 'Parada 1', '2+2=', '5', 'images/paradas/2-1.png');

INSERT INTO EXPLORADOR VALUES ('jones@lucasarts.com', 'Indiana Jones');
INSERT INTO EXPLORADOR VALUES ('croft@ea.com', 'Lara Croft');

INSERT INTO STATUS VALUES ('Percurso de Teste 1', 'croft@ea.com', 2);
INSERT INTO STATUS VALUES ('Percurso de Teste 2', 'jones@lucasarts.com', 1);

COMMIT;
