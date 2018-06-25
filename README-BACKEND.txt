Como é o fluxo de uma função no backend?

1) Alguma ação na interface necessita de uma resposta do backend
2) Para isso, ela chama uma função do Client.js
3) A função fará uma requisição para uma url do servidor do tipo:
    fetch(`/admLogin?u=${user}&p=${password}`)
4) Pode ser POST, GET, etc.
5) Você deve escrever uma função que ouça na url desejada dentro do arquivo server.js
6) Dentro dela é necessário tratar erros de parâmetros, por exemplo, parâmetros faltando ou fora do formato correto, caso eles não tenham sido tratados no front
7) A seguir, é preciso executar a lógica da função, por exemplo, executar um comando SQL
8) Após terminar a lógica, é necessário enviar um retorno, que será recebido pela função que fez a requisição no Client.js
9) A maneira mais fácil de mandar e recuperar as informações entre o servidor e cliente é um JSON (semelhante a um struct)
10) Já de volta no Client.js devemos checar o status da resposta - afinal, não queremos um 404 ou algo semelhante
11) Por fim executamos a função de callback que foi enviada desde o acionamento no passo 2. Ela deverá aplicar as mudanças em interface, variáveis de aplicação e etc correspondentes a ação que fizemos no backend

OBS: O servidor está na porta 3001. Caso ocorra algum erro no processamento que acontece no servidor, pode ser que a requisição seja repassada para a porta do cliente (3000). No console pode aparecer algum erro relacionado a não ter resposta naquele endereço e mostrar a url partindo do 3000. Não se assuste. A configuração do proxy está correta. Busque o erro na sua função no servidor.
