Claro Brasil Challenge - Node JS
===================

O objetivo deste desafio é avaliar a competência técnica dos candidatos a desenvolvedor NodeJS na **Claro Brasil**. Será solicitado o desenvolvimento de uma API restful para fazer o Controle de Devices cadastrados no sistema. As regras deste Controle de Devices estão detalhada neste documento.

----------

Especificações Técnicas
-------------

- **Plataforma suportada:** NodeJS 6.10+
- **Linguagem:** Javascript
- **Idioma de escrita do código:** Inglês

----------

Requisitos
-------------

#### Contextualização

A empresa possui uma solução de vídeo que os usuários utilizam através de um aplicativo nas plataformas Android e iOS.
Os usuários têm à disposição um catálogo de filmes e séries que eles podem assistir em seus tablets/smartphones.
Para assistir ao conteúdo do catálogo, o usuário precisa primeiro cadastrar o seu dispositivo no backend.

O desafio consiste em criar uma API restful fictícia que permita o cadastro, alteração e remoção dos dispositivos dos usuários. Não é necessário implementar o cadastro dos usuários. Os mesmos serão representados por ids.

Existem algumas restrições para o controle de devices:
- Um usuário poderá ter, no máximo, três dispositivos cadastrados.
- O usuário poderá fazer a troca de um dispositivo cadastrado no período de 30 dias. Para isso, o usuário deverá remover um dispositivo e cadastrar outro. Após efetuar a troca de um dispositivo, uma nova troca só será possível 30 dias depois.

As APIs de controle de devices deverão respeitar estas restrições e retornar os erros correspondentes, informando para o client o motivo do erro.

Veja abaixo alguns exemplos de uso:
1. O usuário **123** deseja cadastrar o seu primeiro device. A API cadastra o device e retorna sucesso.
2. O usuário **456** já possui três devices cadastrados, tem direito a uma troca, e deseja cadastrar o quarto device. A API não cadastra o device e retorna erro, informando que aquele usuário excedeu o limite de devices cadastrados, mas ainda pode fazer uma troca.
3. O usuário **456** já possui três devices cadastrados, já efetuou uma troca nos últimos 30 dias, e deseja cadastrar o quarto device. A API não cadastra o device e retorna erro, informando que aquele usuário excedeu o limite de devices cadastrados e não pode mais fazer troca. Neste caso, a API também deverá retornar a data em que o usuário poderá fazer uma nova troca.
4. O usuário **789** possui dois devices cadastrados, já efetuou uma troca nos últimos 30 dias, e deseja remover um device. A API remove o device e retorna sucesso.
5. O usuário **789** agora possui apenas um device cadastrado, já efetuou uma troca nos últimos 30 dias, e deseja remover este device. A API não remove o device cadastrado e retorna erro, informando que o último device não pode ser removido, pois o usuário não será capaz de cadastrar outro, e assim não poderá usar o aplicativo. Neste caso, a API também deverá retornar a data em que o usuário poderá fazer uma nova troca.


#### Requisitos obrigatórios (Funcionalidades)

1. Adicionar um dispositivo, informando:
	- ID do usuário
	- ID do dispositivo
	- Nome do dispositivo
	- Modelo do dispositivo (Android, iOS)
2. Alterar o nome de um dispositivo através do ID
3. Remover um dispositivo através do ID


#### Requisitos desejáveis

 - Testes unitários
 - Integração contínua (Travis)


#### Requisitos "plus"

Os requisitos abaixo não precisam ser implementados, mas são considerados um "plus" na sua avaliação.

 - Use arquitetura em Serverless
 - Use Amazon Web Services
 - Ao concluir o challenge, crie uma nova branch e refatore partes do seu código. Avalie se as libs externas que você utilizou são realmente necessárias neste contexto. Sugestão: Remova algumas libs e utilize a própria linguagem JavaScript, módulos do próprio Node, ou features ES6 / ES7.


----------

Critérios de avaliação
-------------

 - Qualidade de escrita do código
 - Organização do projeto
 - Qualidade da API Restful
 - Lógica da solução implementada
 - Qualidade da camada de persistência
 - Utilização do Git (quantidade e descrição dos commits, Git Flow)

----------

Instruções de entrega
-------------

 1. Crie um fork do repositório no seu GitHub
 2. Faça o push do código desenvolvido no seu Github
 3. Inclua um arquivo chamado COMMENTS.md explicando
	 - Explicação rápida da decisão da arquitetura utilizada e o porquê
	 - Lista de bibliotecas de teceiros utilizadas
	 - O que você melhoraria se tivesse mais tempo
	 - Quais requisitos obrigatórios não foram entregues e o porquê
 4. Informe ao recrutador quando concluir o desafio junto com o link do repositório
