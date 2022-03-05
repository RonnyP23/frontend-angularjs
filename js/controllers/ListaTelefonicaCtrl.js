
app.controller("listaTelefonicaCtrl", function ($scope,$http) {
    $scope.app = "ListaTelefonica";
    $scope.contatos = [
      { nome: "ronny", telefone: "5454455545",/*  idade: "20" */ },
      { nome: "ana", telefone: "5454455545", /* idade: "25" */ },
      { nome: "maria", telefone: "5454455545",/*  idade: "30" */ },
      { nome: "jonne", telefone: "5454455545", /* idade: "12"  */},
    ];

    $scope.operadoras = [
      {nome: "gvt" , codigo: "11",categoria: "fixo"},
      {nome: "oi" , codigo:"14",categoria: "fixo"},
      {nome:"telecon", codigo:"21",categoria: "fixo"},
      { nome: "TIM " , codigo :"99", categoria: "celular"},
      { nome: "CLARO", codigo: "88", categoria: "celular"}
    ];


/* ----------------------------------FUNCTION--------------------- */
/* -------------------------------ADICIONAR CONTATO--------------- */
    $scope.adcContato = function(contato){
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
      // produtosService.cadastrarProduto(function(response){
      //   console.log(response)
      // })

    };

/* -------------------------------EXCLUIR CONTATO--------------------- */



    $scope.excluirCtt = function (contatos){
      $scope.contatos = contatos.filter (function (contato){
        if(!contato.selecionado) return contato ;
      });
    }


/* -------------------------ecopo chamando a classe ------------------ */
    $scope.classe = "selecionado" ;
    





  });