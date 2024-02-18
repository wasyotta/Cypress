####################Informações importantes do projeto############################

1)No padrão scaffolding do projeto existe uma pasta chamada fixtures, fixtures  é estrutura onde colocamos massas de teste estática para ser usada no projeto

2) Para realizar a ação de anexar um arquivo temos de utilizar uma biblioteca a parte que faz esse trabalho, podemos instalar essa biblioteca através do comando abaixo
npm install cypress-file-upload --save-dev

3) todo pacote relacionado a testes de software devem ficar em "Dev Dependencies"

4) A pasta suporte que vem por padrão no projeto no cypress, existem dois  arquivos chamados "comands.js" e "index.js" esses arquivos, são utilizados

    A) O arquivo index.js importa para dentro do código contido nele o arquivo "Comands.js", é o arquivo principal do projeto de automação, todo código, contido nele
        é executado antes de rodar um teste automatizado

    B) O arquivo comands.js é onde customizamos comandos necessários para melhorar emcapsulamento e automação de teste
        

5) Existem alguns elementos da tela que possuem atributos que ficam escondidos e que não são fáceis de serem identificados, para melhor análse podemos utilizar um recurso do inspecionar chamado  display none geralmente localizado na tag style do html      

6) Algumas estratégias de localização são utilizados algumas expressões regulares (REGEX)

7) Pode ser que ao decorrer da construção da automação não conseguimos executar a automação no chrome e edge, por conta de problemas no certificado
npm i cypress --save-dev --strict-ssl=false


8) As Classes no JavaScript seguem o padrão "Pascal Case", onde o As Inicias da classe començam com letra maiucula diferente do padrão camel case onde apenas a primeira frase começa com letra minuscula


9) Na automação é comum usarmos um pasta para estruturar alguns arquivos para otimizar e deixar o código mais organizado, chamamos de Page Object, POM(Page Object Model) nesta pasta

10) Ganchos no cypress são definidos por alguns blocos reservados definidos como before, before each, after e after each

before( function(){
        cy.log('Tudo aqui é executado uma unica vez ANTES de TODOS os testes')
    })

    beforeEach( function(){
        cy.log('Tudo aqui é executado uma unica vez ANTES de CADA caso de teste')
    })


    after( function(){
        cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os testes')
    })

    afterEach( function(){
        cy.log('Tudo aqui é executado uma unica vez DEPOIS   de CADA caso de teste')
    })

11) Por Padrão o todos as funções, casos de testes classes, precisam estar em inglês

12) podemos utilizar uma lib para gerar dados dinãmicos e tornar a automação mais simples, podemos utilizar instalando pelo comando
    npm install faker --save-dev